<?php
session_start();
require_once '../PHPscripts/auth.php';
global $rows;
global $errors;
?>
<div class="success_registration"><?= @$_SESSION['success'] ?></div>
<div class="registration_wrapper">

    <form action="<?= htmlspecialchars($_SERVER['PHP_SELF'])?>"  name="registration" method="POST" enctype="multipart/form-data">
        <p>Зарегистрироваться</p>
        <?= @$GLOBALS['exist_email'] ?>
        <div class="insert_field">
            <div class="top">
                <input type="text" name="reg_name" placeholder="Имя *"  value="<?=@$_POST['reg_name'] ?>" required>
                <input type="text" name="reg_lastname" placeholder="Фамилия *" value="<?=@$_POST['reg_lastname'] ?>" required>
            </div>
            <div class="bottom">
                <input type="email" name="reg_email" placeholder="Почта *" value="<?=@$_POST['reg_email'] ?>" required>
                <input type="password" name="reg_password" placeholder="Пароль *" value="<?=@$_POST['reg_password'] ?>" required>
            </div>
            <div class="bottomWrapper">
                <label>
                    <input class="file-input" type="file" name="avatar">
                    <span>Фото профиля</span>
                </label>
                <div class="alert"></div>
            </div>
        </div>
        <div class="form_buttons">
            <button class="auth" name="auth">Авторизоваться</button>
            <button class="reg" name="reg" type="submit">Зарегистрироваться</button>
        </div>
    </form>
</div>
<?= @$GLOBALS['success_login']?>
<div class="auth_wrapper">
    <form action="<?= htmlspecialchars($_SERVER['PHP_SELF'])?>" name="auth" method="POST" enctype="multipart/form-data">
        <p>Войти в профиль</p>
        <?= @array_shift($auth_errors)?>
        <div class="insert_field">
            <div class="bottom">
                <input type="email" name="auth_email" placeholder="Почта *" value="<?=@$_POST['auth_email'] ?>" required>
                <input type="password" name="auth_password" placeholder="Пароль *" value="<?=@$_POST['auth_password']?>" required>
            </div>
            <div class="bottomWrapper">
                <div class="alert"></div>
            </div>
        </div>
        <div class="form_buttons">
            <button name="login" type="submit">Войти</button>
            <button name="sign_in">Нет аккаунта?</button>
        </div>
    </form>
</div>
