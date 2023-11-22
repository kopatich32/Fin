<?php
$host = 'localhost';
$user = 'root';
$password = '';
$data_base = 'Fin';
$connect = @new mysqli($host,$user,$password,$data_base);
if($connect->connect_errno){
    echo 'Error number: ' .  $connect->connect_errno . '.' . '<br>'. 'Reason: ' . $connect->connect_error;
}

