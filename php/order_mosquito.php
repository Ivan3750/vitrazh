<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Немає даних']);
    exit;
}

$message = "НОВЕ ЗАМОВЛЕННЯ НА МОСКІТНІ СІТКИ:\n";
$message .= "Ширина: " . $data['width'] . " мм\n";
$message .= "Висота: " . $data['height'] . " мм\n";
$message .= "Кількість: " . $data['quantity'] . "\n";
$message .= "Тип полотна: " . $data['meshType'] . "\n";
$message .= "Колір: " . $data['color'] . "\n";
$message .= "Тип: " . $data['type'] . "\n";
$message .= "Гальмо: " . ($data['hasBrake'] ? "Так" : "Ні") . "\n";

mail("kohan3750@gmail.com", "Заявка на москітні сітки", $message);

// Повертаємо JSON з адресою редіректу
echo json_encode([
    'success' => true,
    'redirect' => '/thank-you.html'
]);
exit;