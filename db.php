<?php
$servername = 'project';
$username = 'root';
$password = '';
$dbname = 'register';
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
    die('Connection failed'. mysqli_connect_error());
}