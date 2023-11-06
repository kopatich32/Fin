<?php
//session_start();
//$host = 'localhost';
//$owner = 'root';
//$pass = '';
//$data_base = 'Fin';
//$DB_init = @new mysqli($host,$owner,$pass, $data_base);
//if($DB_init->connect_errno){
//    echo 'error: ' . $DB_init->connect_errno . ' ' . 'Reason: ' . $DB_init->connect_error;
//}else{
//    if(isset($_POST['login']) || isset($_POST['reg'])){
//        $reg_name = $_POST['name'];
//        $reg_surname = $_POST['lastname'];
//        $reg_pass  = $_POST['password'];
//        $reg_email = $_POST['email'];
////    registration
//        if(isset($_POST['reg'])){
//            if(empty($reg_name) || empty($reg_surname) || empty($reg_pass) || empty($reg_email)){
//                echo 'Fill all areas';
//            }else{
//                $DB_init->query("INSERT INTO `authorization`( `name`, `surname`, `email`, `password`) VALUES ('$reg_name','$reg_surname','$reg_email','$reg_pass')");
//            }
//        }
//
//        //login
//        if(isset($_POST['login'])){
//            $res = $DB_init->query("SELECT * FROM `authorization` WHERE email = '$reg_email'  AND  password = '$reg_pass'");
//            if(empty($reg_email) || empty($reg_pass)){
//                echo 'fill the fields';
//            }else{
//                if($res->num_rows>0){
//                    $_SESSION['alreadyIn'] = 'Login success';
//                    header('Location: ../pages/index.php');
//                }else{
//                    echo 'nope';
//                }
//            }
//        }
//    }
//
//    $first_symbol = $DB_init->query("SELECT * FROM `authorization`")->fetch_assoc();
//    $final_sym = mb_strtoupper(str_split($first_symbol['email'])[0]);
//}




print_r($_POST['email']);










