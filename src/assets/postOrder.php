<?php
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$order = json_decode(file_get_contents('php://input'), true);



$project = 'devi bag';
$today = date("dmYHms");
$message =  "
        <p><strong>Заказ #$project-$today</strong></p>
        <p>Имя: <strong>". $order['name'] . "</strong></p>
        <p>Адрес доставки: <a href='https://yandex.by/maps/158/mogilev/?mode=search&text=" . $order['address'] . "' target='_blank'>
        <strong>" . $order['address'] . "</strong></a></p>
        <p>Телефон:<strong> ". $order['phone'] ."</strong></p>
        <p>Количество: <strong> ". $order['count'] ." </strong></p>
        <p>Заказы: <strong> ". json_encode($order['orders'], JSON_FORCE_OBJECT) ." </strong></p>
    ";

if (isset($order)) {

    echo json_encode($order, JSON_FORCE_OBJECT);

    $to  = "<rom111419@gmail.com>," ;
    $to  .= "<info@devi-bag.by> " ;

    $subject = "Заявка #$project-$today";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: devi-bag.by <info@devi-bag.by>\r\n";
    $headers .= "Reply-To: akbmogilev@gmail.com\r\n";

    mail($to, $subject, $message, $headers);

} else {
    echo "веденные данные некорректны";
}
