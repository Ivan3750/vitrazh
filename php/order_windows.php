<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Немає даних']);
    exit;
}

$message = "НОВЕ ЗАМОВЛЕННЯ НА ВІКНА:\n";
$message .= "Профіль: " . $data['profile'] . "\n";
$message .= "Форма вікна: " . $data['window']['shape'] . "\n";
$message .= "Розміри: " . $data['window']['width'] . " x " . $data['window']['height'] . " см\n";
$message .= "Фурнітура: " . $data['window']['hardware'] . "\n";
$message .= "Колір: " . $data['window']['color'] . "\n";
$message .= "Склопакет: " . implode(", ", $data['window']['glass']) . "\n";
$message .= "Послуги: " . implode(", ", $data['window']['services']) . "\n";

mail("kohan3750@gmail.com", "Заявка на вікна", $message);

echo json_encode([
    'success' => true,
    'redirect' => '/thank-you.html'
]);
exit;