<?php
include('db.php');
$login = $_POST['name'];
$lastName = $_POST['lastname'];
$password = $_POST['password'];
$email = $_POST['email'];

$sql = "INSERT INTO `Users` (login, password, email) VALUES ('$login', '$password','$email')";
$conn -> query($sql);