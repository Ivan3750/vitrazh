<?php
// Обробник заявок і замовлень. Розміщується на хостингу разом зі статичним сайтом (out/).
// Змініть $TO на адресу, куди мають надходити заявки.
$TO = 'kyiv@vitrazh.com.ua';

header('Content-Type: application/json; charset=utf-8');

function fail($msg) {
    echo json_encode(['success' => false, 'message' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('Method not allowed');

$d = json_decode(file_get_contents('php://input'), true);
if (!is_array($d)) fail('Немає даних');
if (!empty($d['honeypot'])) fail('Spam');
if ((int)($d['elapsed'] ?? 0) < 1500) fail('Too fast');

$clean = function ($v, $max = 500) {
    $v = is_scalar($v) ? (string)$v : '';
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr(trim($v), 0, $max);
};

$name = $clean($d['name'] ?? '', 100);
$phone = $clean($d['phone'] ?? '', 40);
if ($name === '' || preg_match_all('/\d/', $phone) < 9) fail('Заповніть ім\'я та телефон');

$subject = $clean($d['subject'] ?? 'Заявка з сайту', 120);
$msg = mb_substr(trim((string)($d['message'] ?? '')), 0, 2000);

$body = "$subject\n\nІм'я: $name\nТелефон: $phone\n";
foreach (['email' => 'E-mail', 'city' => 'Місто', 'address' => 'Адреса', 'delivery' => 'Доставка', 'payment' => 'Оплата', 'measure' => 'Замір'] as $k => $label) {
    $v = $clean($d[$k] ?? '', 200);
    if ($v !== '') $body .= "$label: $v\n";
}
if ($msg !== '') $body .= "Коментар: $msg\n";

// Позиції кошика (замовлення з магазину)
if (!empty($d['items']) && is_array($d['items'])) {
    $body .= "\n--- Склад замовлення ---\n";
    $n = 0;
    foreach (array_slice($d['items'], 0, 100) as $it) {
        if (!is_array($it)) continue;
        $n++;
        $qty = max(1, min(99, (int)($it['qty'] ?? 1)));
        $price = (float)($it['unitPrice'] ?? 0);
        $body .= "$n. " . $clean($it['title'] ?? '', 150) . " — $qty шт. × " . number_format($price, 0, '', ' ') . " грн\n";
        if (!empty($it['details']) && is_array($it['details'])) {
            foreach (array_slice($it['details'], 0, 12) as $line) $body .= '   • ' . $clean($line, 200) . "\n";
        }
    }
    $body .= "\nОрієнтовна сума: " . number_format((float)($d['total'] ?? 0), 0, '', ' ') . " грн\n";
}

// Довільні дані (форма «калькулятор / консультація»)
if (!empty($d['payload']) && is_array($d['payload'])) {
    $body .= "\n--- Деталі ---\n";
    foreach ($d['payload'] as $k => $v) {
        if (is_array($v)) $v = implode(', ', array_map(fn($x) => is_scalar($x) ? (string)$x : '', $v));
        $body .= $clean((string)$k, 60) . ': ' . $clean((string)$v, 300) . "\n";
    }
}

$headers = "Content-Type: text/plain; charset=UTF-8\r\nFrom: noreply@vitrazh.com.ua\r\n";
if (filter_var($d['email'] ?? '', FILTER_VALIDATE_EMAIL)) $headers .= 'Reply-To: ' . $d['email'] . "\r\n";
$ok = mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);
if (!$ok) fail('Помилка надсилання');

echo json_encode(['success' => true]);
