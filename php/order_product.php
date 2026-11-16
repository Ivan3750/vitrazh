<?php
// Замовлення профільної системи зі сторінки товару (/category/windows/goodwin/*).
// Розгортається разом з іншими order_*.php у /api/order_product.php
header('Content-Type: application/json; charset=utf-8');

const ORDER_EMAIL = 'kohan3750@gmail.com';

function fail($message) {
    echo json_encode(['success' => false, 'redirect' => '/err/', 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Очищення значення: без тегів, переносів рядків і зайвих пробілів
function clean($value, $max = 300) {
    $value = is_string($value) ? $value : '';
    $value = strip_tags($value);
    $value = preg_replace('/[\r\n\t]+/u', ' ', $value);
    $value = trim($value);
    return mb_substr($value, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail('Невірний метод запиту');
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    fail('Немає даних');
}

// Антиспам: honeypot та мінімальний час заповнення форми
if (!empty($data['honeypot'])) {
    fail('Spam detected');
}
if (!isset($data['form_start']) || time() - (int)$data['form_start'] < 2) {
    fail('Занадто швидко, спробуйте ще раз');
}

$name    = clean($data['name'] ?? '', 100);
$phone   = clean($data['phone'] ?? '', 30);
$email   = clean($data['email'] ?? '', 120);
$city    = clean($data['city'] ?? '', 150);
$product = clean($data['product'] ?? '', 150);
$url     = clean($data['url'] ?? '', 300);
$qty     = max(1, min(999, (int)($data['quantity'] ?? 1)));
$width   = clean($data['width'] ?? '', 10);
$height  = clean($data['height'] ?? '', 10);
$color   = clean($data['color'] ?? '', 100);
$contact = clean($data['contact_via'] ?? '', 30);
$comment = clean($data['comment'] ?? '', 1500);
$measure = !empty($data['need_measure']) ? 'так' : 'ні';

if ($name === '' || $phone === '' || $product === '') {
    fail('Заповніть ім\'я та телефон');
}
if (!preg_match('/^\+?[0-9\s\-\(\)]{9,20}$/', $phone)) {
    fail('Вкажіть коректний номер телефону');
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail('Вкажіть коректний email або залиште поле порожнім');
}

$size = ($width !== '' && $height !== '') ? "$width x $height мм" : 'не вказано';

$message  = "НОВЕ ЗАМОВЛЕННЯ ПРОФІЛЬНОЇ СИСТЕМИ\n\n";
$message .= "Система: $product\n";
$message .= "Сторінка: $url\n";
$message .= "Кількість конструкцій: $qty\n";
$message .= "Орієнтовний розмір: $size\n";
$message .= "Колір / ламінація: " . ($color !== '' ? $color : 'не вказано') . "\n";
$message .= "Безкоштовний замір: $measure\n\n";
$message .= "Ім'я: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Email: " . ($email !== '' ? $email : 'не вказано') . "\n";
$message .= "Місто / адреса: " . ($city !== '' ? $city : 'не вказано') . "\n";
$message .= "Зв'язатися через: " . ($contact !== '' ? $contact : 'не вказано') . "\n";
$message .= "Коментар: " . ($comment !== '' ? $comment : '-') . "\n";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
if ($email !== '') {
    $headers .= "Reply-To: $email\r\n";
}

$subject = mb_encode_mimeheader('Замовлення: ' . $product, 'UTF-8');

if (!mail(ORDER_EMAIL, $subject, $message, $headers)) {
    fail('Помилка надсилання. Зателефонуйте нам, будь ласка.');
}

echo json_encode(['success' => true, 'redirect' => '/thanks/'], JSON_UNESCAPED_UNICODE);
