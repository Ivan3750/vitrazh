<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    header("Location: /err");
    exit;
}

if (!empty($data['honeypot'])) {
    header("Location: /err");
    exit;
}

if (
    !isset($data['t']) ||
    (time() - ($data['t'] / 1000)) < 2
) {
    header("Location: /err");
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
$message .= "Ім’я: " . $data['name'] . "\n";
$message .= "Телефон: " . $data['phone'] . "\n";
$message .= "Email: " . $data['email'] . "\n";

mail("kohan3750@gmail.com", "Заявка на москітні сітки", $message);

echo json_encode([
    'success' => true,
    'redirect' => '/thank-you.html'
]);
exit;
