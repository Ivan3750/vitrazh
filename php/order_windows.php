<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'redirect' => '/err', 'message' => 'Немає даних']);
    exit;
}


if (!empty($data['honeypot'])) {
    echo json_encode(['success' => false, 'redirect' => '/err', 'message' => 'Spam detected']);
    exit;
}


if (!isset($data['form_start']) || time() - (int)$data['form_start'] < 2) {
    echo json_encode(['success' => false, 'redirect' => '/err', 'message' => 'Too fast (bot)']);
    exit;
}


if (empty($data['user']['name']) || empty($data['user']['phone'])) {
    echo json_encode(['success' => false, 'redirect' => '/err', 'message' => 'Заповніть всі поля']);
    exit;
}

$window = $data['windowData'];


$message = "НОВЕ ЗАМОВЛЕННЯ НА ВІКНА:\n";
$message .= "Профіль: " . $data['profile']['name'] . "\n";
$message .= "Форма вікна: " . $window['shape'] . "\n";
$message .= "Розміри: " . $window['width'] . " x " . $window['height'] . " см\n";
$message .= "Фурнітура: " . $window['hardware'] . "\n";
$message .= "Колір: " . $window['color'] . "\n";
$message .= "Склопакет: " . implode(", ", $window['glass']) . "\n";
$message .= "Послуги: " . implode(", ", $window['services']) . "\n\n";
$message .= "Ім'я: " . $data['user']['name'] . "\n";
$message .= "Телефон: " . $data['user']['phone'] . "\n";
$message .= "Повідомлення: " . $data['user']['message'] . "\n";

if (!mail("kohan3750@gmail.com", "Заявка на вікна", $message)) {
    echo json_encode(['success' => false, 'redirect' => '/err', 'message' => 'Помилка надсилання пошти']);
    exit;
}


echo json_encode([
    'success' => true,
'redirect' => '/thank-you.html' ]);
exit;
