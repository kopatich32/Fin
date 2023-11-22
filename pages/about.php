<?php
session_start();
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="../styles/startPage.css">
    <link rel="stylesheet" href="../styles/courses.css">
<!--    <link rel="stylesheet" href="../styles/calculator.css">-->

    <link rel="stylesheet" href="../styles/about.css">
    <title>О нас</title>
</head>
<body id="top">
<?php
include 'header.php';
include 'registrationForm.php';
?>
<div class="menu">
    <div class="burger">
        <div class="hamburger"></div>
    </div>
</div>

<?php include 'footer.php';?>
<script type="module" src="../scripts.js"></script>
</body>
</html>