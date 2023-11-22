<?php session_start();
include '../PHPscripts/auth.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile</title>
</head>
<body>

<a href="about.php">BACK</a>
<h1><?=$_SESSION['name']; echo ' ' . $_SESSION['lastname']?></h1>
<h2><?=$_SESSION['user']?></h2>

</body>
</html>