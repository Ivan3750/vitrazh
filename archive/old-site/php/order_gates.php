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

 if (!isset($data['t']) || (time() - ($data['t'] / 1000)) < 2) {
    header("Location: /err");
    exit;
}

 
$message = "НОВЕ ЗАМОВЛЕННЯ НА ВОРОТА:\n";
$message .= "Ширина: {$data['width']} мм\n";
$message .= "Висота: {$data['height']} мм\n";
$message .= "Тип воріт: {$data['gateType']}\n";
$message .= "Тип підйому: {$data['liftType']}\n";
$message .= "Колір: {$data['color']}\n\n";
$message .= "Додаткові опції:\n";

foreach ($data['extras'] as $key => $value) {
    if ($value) {
        $message .= "- $key\n";
    }
}

$message .= "\nКонтакти:\n";
$message .= "Ім’я: {$data['name']}\n";
$message .= "Телефон: {$data['phone']}\n";
$message .= "Email: {$data['email']}\n";

mail("kohan3750@gmail.com", "Заявка на ворота", $message);

echo json_encode([
    'success' => true,
    'redirect' => '/thanks'
]);
exit;
