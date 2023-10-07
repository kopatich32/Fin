<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Калькулятор вкладов</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="../styles/startPage.css">
    <link rel="stylesheet" href="../styles/courses.css">
    <link rel="stylesheet" href="../styles/calculator.css">
    <link rel="icon" href="../images/icon.png">
</head>
<body id="top">
<div class="cont">
    <?php
    include 'header.php';
     include 'registrationForm.php';
     ?>
    <!-- Hamburger menu -->
    <div class="menu">
        <div class="burger">
            <div class="hamburger"></div>
        </div>
    </div>
<form name="calculator">
    <h1>Вклад "Выгодный"</h1>
    <h3>Выгодная процентная ставка, при сумме вклада от 100 000 рублей</h3>

    <div class="deposit_wrapper">
        <div class="row">
            <div class="value_of_cash">
                <p>Сколько вы хотите вложить</p>
                <input type="text" name="num">
                <p>от 10 000 ₽</p>
            </div>
            <div class="date">
                <p>На срок</p>
                <div class="date_wrapper">
                    <div class="choose_months">
                        <div class="current_months">1 мес</div>
                                <ul class="list" name="list">
                                    <li value="5.8" data-month="1">1 мес</li>
                                    <li value="11" data-month="2">2 мес</li>
                                    <li value="10" data-month="3">3 мес</li>
                                    <li value="9.5" data-month="4">4 мес</li>
                                    <li value="9" data-month="6">6 мес</li>
                                    <li value="8.4" data-month="12">1 год</li>
                                </ul>
                    </div>
                    <div class="open_close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill-rule="evenodd"
                                  d="M15.293 9.883a1 1 0 011.414 1.414L12 16.004l-4.707-4.707a1 1 0 011.414-1.414L12 13.176l3.293-3.293z"></path>
                        </svg>
                    </div>
                </div>

            </div>
        </div>

        <div class="result_of_deposit">
            <p>К <span class="month_of_end">[Выбирете срок]</span> вы накопите</p>
            <p class="final_sum">0</p>
            <table>
                <tr>
                    <td>Максимальная ставка</td>
                    <td class="percent">5.8%</td>
                </tr>
                <tr>
                    <td>Вы заработаете</td>
                    <td class="income">0</td>
                </tr>
            </table>
            <button class="reg_deposit order">Оформить вклад</button>
        </div>
    </div>

        <!--        <input list="months">-->
<!--        <datalist id="months">-->
<!--            <option value="1 месяц">3,8%</option>-->
<!--            <option value="2 месяца">4,25%</option>-->
<!--            <option value="3 месяца">5,2%</option>-->
<!--            <option value="4 месяца">5,35%</option>-->
<!--            <option value="6 месяцев">5,45%</option>-->
<!--            <option value="1 год">6%</option>-->
<!--        </datalist>-->
</form>
    <?php include 'footer.php'?>
</div>
<script type="module" src="../scripts.js"></script>
<script src="../calculatorPage.js"></script>

</body>
</html>