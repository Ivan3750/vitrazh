<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Немає даних']);
    exit;
}

$message = "НОВЕ ЗАМОВЛЕННЯ НА РОЛЕТИ:\n";
$message .= "Ширина: " . $data['width'] . " мм\n";
$message .= "Висота: " . $data['height'] . " мм\n";
$message .= "Тип профілю: " . $data['profile'] . "\n";
$message .= "Вид монтажу: " . $data['montage'] . "\n";

mail("kohan3750@gmail.com", "Заявка на ролети", $message);

echo json_encode([
    'success' => true,
    'redirect' => '/thank-you.html' // Вказуємо куди редіректити
]);
exit;
