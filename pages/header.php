<?php
//session_start();
//session_destroy();
//require_once '../PHPscripts/auth.php' ?>
<header>
    <a href="index.php" title="на главную страницу">
        <div class="logo">
            <span class="fin2">Fin</span>
            <span class="kit2">Kit</span>
        </div>
    </a>
    <a href="courses.php">
        <div class="courses">Курсы валют</div>
    </a>
    <a href="calculator.php">
        <div class="course_of_metal">Калькулятор вкладов</div>
    </a>
    <a href="contacts.php">
        <div class="contacts">Контакты</div>
    </a>
    <a href="about.php">
        <div class="about">О нас</div>
    </a>
<!--    --><?php
//    if($_SESSION['alreadyIn']){ ?>
<!--    <a href="#" class="user">-->
<!--        --><?php // echo "<div ". "title=".$first_symbol['email'] . ">" . $final_sym . "</div>";?>
<!--       --><?php //} ?>
<!--    </a>-->

    <a href="" onsubmit="(e)=>{e.preventDefault();}">  <div class="account"><img src="../images/account_icon.svg.png" alt="Profile"></div></a>

</header>