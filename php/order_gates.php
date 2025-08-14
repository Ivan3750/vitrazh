<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Немає даних']);
    exit;
}

$message = "НОВЕ ЗАМОВЛЕННЯ НА ВОРОТА:\n";
$message .= "Ширина: " . $data['width'] . " мм\n";
$message .= "Висота: " . $data['height'] . " мм\n";
$message .= "Тип воріт: " . $data['gateType'] . "\n";
$message .= "Тип підйому: " . $data['liftType'] . "\n";
$message .= "Колір: " . $data['color'] . "\n";
$message .= "Опції:\n";

foreach ($data['extras'] as $key => $value) {
    if ($value) {
        $message .= "- " . $key . "\n";
    }
}

mail("kohan3750@gmail.com", "Заявка на ворота", $message);

echo json_encode([
    'success' => true,
    'redirect' => '/thank-you.html'
]);
exit;