<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/startPage.css">
    <link rel="stylesheet" href="../styles/courses.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" href="../images/icon.png">
    <title>Курсы валют</title>
</head>

<body id="top">
<div class="cont">
   <?php include 'header.php' ?>
    <!-- Hamburger menu -->
    <div class="menu">
        <div class="burger">
            <div class="hamburger"></div>
        </div>
    </div>
    <main>
        <div class="text">
            <h1>Курсы валют и обмен</h1>
            <p>Выгодный обмен валют от банка. Информация о курсах обмена иностранных валют является справочной и
                может меняться в течение дня.</p>
        </div>
        <div class="img"><img class="picture" src="../images/dollar_euro.jpg" alt="dollar/euro"></div>
    </main>
    <div class="section">
        <div class="courseOfCurrency">
            <h2>Курс валют</h2>
            <p class="current_date"></p>
            <p class="time_now"></p>
        </div>
        
        <div class="gridContainer">
            <p>г. Калуга ул. Кирова д. 1</p>
            <p id="value_of_day">lalalala</p>
            <p class="buy">Покупка</p>
            <p></p>
            <p class="sell">Продажа</p>
            <p id="buy_usd">27.10</p>
            <p><img src="../images/Usa_flag.svg" alt="USA"></p>
            <p id="sell_doll">24.83</p>
            <p id="buy_eur">27.50</p>
            <p><img src="../images/Euro.png" alt="Euro"></p>
            <P id="sell_eur">24.75</P>
        </div>
    </div>
    <footer>
        <p>2007 - 2023 &#169; OOO "Fin Kit"</p>
        <p> Связаться с нами <a href="tel:8 (123)-456-78-90">8 (123)-456-78-90</a></p>
        <p class="footRight">Разрабатано в 2023 г.</p>
        <div class="anchor_top">
            <a href="#top" title="наверх">
                <div id="icon" class="material-symbols-outlined icon">arrow_circle_up</div>
            </a>
        </div>
    </footer>
</div>
<?php include 'registrationForm.php'?>

<script src="../scripts.js"></script>
<script type="module" src="../dateAndCourse.js"></script>
<script src="../course.js"></script>
</body>

</html>
