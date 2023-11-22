<?php
session_start();
include 'DBconnect.php';
global $connect;
//registration

if (isset($_POST['reg'])) {
    $errors = [];
    $name = $_POST['reg_name'];
    $lastname = $_POST['reg_lastname'];
    $email = $_POST['reg_email'];
    $password = password_hash($_POST['reg_password'], PASSWORD_DEFAULT);
    $profile_avatar = $_FILES['avatar'];
    $role = 'user';
    if ($name == '') {
        $errors[] = 'Введите имя';
    }
    if ($lastname == '') {
        $errors[] = 'Введите фамилию';
    }
    if ($email == '') {
        $errors[] = 'Введите Email';
    }
    if ($password == '') {
        $errors[] = 'Введите пароль';
    }
    $get_rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$email'");
    if (empty($errors)) {
        if ($get_rows->num_rows > 0) {
            $exist_email = '<div class="exist" style="border: 3px solid #af1212">Такой email уже зарегистрирован</div>';
        } else {
            $success = '<div class="success" style="border: 3px solid green">Успешная регистрация</div>';
            @$connect->query("INSERT INTO `authorization`(`name`, `surname`, `email`, `password`, `avatar`, `role`) VALUES ('$name','$lastname','$email','$password','$profile_avatar','$role')");
        }
    } else {
        echo '<div style="background: red">' . array_shift($errors) . '</div>';
    }

}
// Auth
if(isset($_POST['login'])){
    $auth_email = $_POST['auth_email'];
    $auth_password = $_POST['auth_password'];
    $rows = $connect->query("SELECT * FROM `authorization` WHERE `email` = '$auth_email' AND `password` = '$auth_password'");
    if($rows->num_rows > 0){
        $data = $rows->fetch_assoc();
        echo 'Вы вошли в профиль';
        $_SESSION['online'] = 'online';
        $_SESSION['name'] = $data['name'];
        $_SESSION['lastname'] = $data['surname'];
        $_SESSION['user'] = $data['email'];
        $_SESSION['avatar'] = $data['avatar'];
        $_SESSION['role'] = $data['role'];
    }

}
