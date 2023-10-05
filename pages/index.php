<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../styles/startPage.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" href="../images/icon.png">
<title>Fin Kit</title>
</head>

<body id="top">
    <div class="project">
        <header>
                <a href="courses.php"><div class="courses">Курсы валют</div></a>
                <a href="calculator.php"><div class="course_of_metal">Калькулятор вкладов</div></a>
                <a href="contacts.php"><div class="contacts">Контакты</div></a>
                <a href="about.php"><div class="about">О нас</div></a>
            <a href="#"> <div class="account"><img src="../images/account_icon.svg.png" alt="Profile"></div></a>
        </header>
        <!-- Hamburger menu -->
        <div class="menu">
            <div class="burger">
                <div class="hamburger"></div>
            </div>
        </div>
        <!--  -->
        <div class="container">

            <section>
                <div class="phone">
                    <img class="telephone" src="../images/telephone.png" alt="Telephone">
                </div>
                <div class="content">
                    <div class="logo">
                        <span class="fin">Fin</span>
                        <span class="kit">Kit</span>
                    </div>
                    <p>Гибкая мобильная платформа <br>
                        для быстрой реализации<br> инвестиционных сервисов. </p>
                    <button class="order">Заказать демо</button>
                </div>
            </section>
            <div class="bottom_part_of_main">
                <div class="cube1">
                    <p>Удобный пользовтельскй интерфейс</p>
                    <span class="background_icons"><img src="../images/Graph.svg" alt="Picture"></span>
                </div>
                <div class="cube2">
                    <p>Панель администратора для ведения учета</p>
                    <span class="background_icons"><img src="../images/Activity.svg" alt="Picture"></span>
                </div>
                <div class="cube3">
                    <p>Простая и быстрая интеграция</p>
                    <span class="background_icons"><img src="../images/Filter.svg" alt="Picture"></span>
                </div>
                <div class="cube4">
                    <p>Гибкая масштабируемая система</p>
                    <span class="background_icons"><img src="../images/Setting.svg" alt="Picture"></span>
                </div>
            </div>
        </div>
        <main>
            <h2>Наши <span class="text_color">ключевые продукты</span><br> для инвестиций</h2>
            <div class="row_of_risk">
                <div class="left_block">
                    <div class="left_text">
                        <p>Платформа для автоследования</p>
                        <p>Копирование стратегий в автономном режиме</p>
                    </div>
                    <img src="../images/Riskleve3.svg" alt="Picture_of_risk_level_1">
                </div>
                <div class="right_block">
                    <div class="right_text">
                        <p>Платформа для<br>робо-эдвайзинга</p>
                        <p>Персонализированный подбор стратегий исходя из заданных параметров</p>
                    </div>
                    <img src="../images/Risklevel1.svg" alt="Picture_of_risk_level_2">
                </div>
            </div>
        </main>
        <div class="bottom_part">
            <div class="left_of_bottom">
                <p><span class="text_color">Представляем ценность</span><br> для брокера и банка</p>
                <p>Мы помогаем броĸерам и банĸам запустить собственное мобильное приложение для инвестиций в ĸоротĸие
                    сроĸи и с эĸономией бюджета</p>
                <button class="order">Заказать демо</button>
            </div>
            <div class="right_of_bottom">
                <div class="left_side">
                    <div>
                        <span class="background_icons"><img src="../images/coins.svg" alt="img"></span>
                        <p>Эĸономим время и деньги
                            на запусĸ digital сервисов</p>
                    </div>
                    <div>
                        <span class="background_icons"><img src="../images/increase.svg" alt="img"></span>
                        <p>Помогаем увеличить выручку путем запуска нового продукта</p>
                    </div>
                </div>
                <div class="right_side">
                    <div>
                        <span class="background_icons"><img src="../images/_5.svg" alt="img"></span>
                        <p>Создаем канал привлечения новых клиентов</p>
                    </div>
                    <div>
                        <span class="background_icons"><img src="../images/clients.svg" alt="img"></span>
                        <p>Повышаем лояльность действующих клиентов</p>
                    </div>
                </div>

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

<!--Form-->
    <?php include 'registrationForm.php'?>


    <!--<script>-->
    <!--        function ready() {-->
    <!--        // alert('DOM готов');-->
    <!--        // alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);-->
    <!--    }-->

    <!--        document.addEventListener("DOMContentLoaded", ready);-->
    <!--</script>-->

    <!--<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">-->
    <!--</script>-->
    <!--<svg>-->
    <!--    <rect x="10" y="10" width="50" height="10" fill="black"></rect>-->
    <!--    <rect x="10" y="30" width="50" height="10" fill="black"></rect>-->
    <!--    <rect x="10" y="50" width="50" height="10" fill="black"></rect>-->
    <!--</svg>-->
    <script src="../scripts.js"></script>


</body>

</html>