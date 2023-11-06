<?php
//session_start();
//require_once '../PHPscripts/auth.php'?>
<div class="registration_wrapper">
      <form name="registration" method="POST" enctype="multipart/form-data">
        <p>Войти в профиль</p>
    <div class="insert_field">
        <div class="top">
            <input type="text" name="name" placeholder="Имя">
            <input type=text" name="lastname" placeholder="Фамилия">
        </div>
        <div class="bottom">
            <input type="email" name="email" placeholder="Почта">
            <input type="password" name="password" placeholder="Пароль">
        </div>

        <label>
            <input class="file-input" type="file" name="file">
            <span>Фото профиля</span>
        </label>

    </div>
    <div class="form_buttons">
        <button name="login" type="submit">Войти</button>
        <button class="auth" name="auth" type="submit">Авторизоваться</button>
        <button name="sign_in" type="submit">Нет аккаунта?</button>
        <button class="reg" name="reg" type="submit">Зарегистрироваться</button>
    </div>
    </form>


</div>
