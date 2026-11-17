<?php
// Обробник заявок. Розміщується на хостингу разом зі статичним сайтом (out/).
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
    $v = is_string($v) ? $v : '';
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr(trim($v), 0, $max);
};

$name = $clean($d['name'] ?? '', 100);
$phone = $clean($d['phone'] ?? '', 40);
if ($name === '' || preg_match_all('/\d/', $phone) < 9) fail('Заповніть ім\'я та телефон');

$subject = $clean($d['subject'] ?? 'Заявка з сайту', 120);
$msg = mb_substr(trim((string)($d['message'] ?? '')), 0, 2000);

$body = "$subject\n\nІм'я: $name\nТелефон: $phone\n";
if ($msg !== '') $body .= "Коментар: $msg\n";

if (!empty($d['payload']) && is_array($d['payload'])) {
    $body .= "\n--- Деталі замовлення ---\n";
    foreach ($d['payload'] as $k => $v) {
        if (is_array($v)) $v = implode(', ', array_map(fn($x) => is_scalar($x) ? (string)$x : '', $v));
        $body .= $clean((string)$k, 60) . ': ' . $clean((string)$v, 300) . "\n";
    }
}

$headers = "Content-Type: text/plain; charset=UTF-8\r\nFrom: noreply@vitrazh.com.ua\r\n";
$ok = mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);
if (!$ok) fail('Помилка надсилання');

echo json_encode(['success' => true]);
