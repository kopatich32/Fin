<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
function show($arr){
    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}
if($_POST) show($_POST);
if($_FILES) show($_FILES);
if($_FILES) show($_FILES['file']['size'])

?>
<form method="POST" enctype="multipart/form-data" >
    <input type="text" name="name" placeholder="name">
    <input type="file" name="file">
    <button id="inp" type="submit" name="sendBTN" value="ololo">send</button>
</form>

</body>
</html>