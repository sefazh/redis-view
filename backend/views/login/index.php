<?php
/**
 * Login index 模板
 * @Author: zhuangxiaofan
 * @Date: 2017/3/23
 * @Time: 14:47
 */
use \yii\helpers\Url;
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>

    <link href="<?php echo Yii::$app->request->baseUrl; ?>/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo Yii::$app->request->baseUrl; ?>/css/main.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="<?php echo Yii::$app->request->baseUrl; ?>/js/html5shiv.js"></script>
    <script src="<?php echo Yii::$app->request->baseUrl; ?>/js/respond.min.js"></script>
    <![endif]-->
</head>

<body class="login-page">

<div class="signin">
    <div class="signin-head">
        <h3>登录界面</h3>
    </div>
    <form class="form-signin" role="form" id="loginForm" action="<?= Url::to('login/dologin')?>" method="post">
        <input type="text" name="username" class="form-control" placeholder="用户名" />
        <input type="password" name="pwd" class="form-control" placeholder="密码" />
<!--        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>-->
        <button class="btn btn-lg btn-primary btn-block" type="button" onclick="location.href='<?= Url::to('home/index')?>'">登录</button>
    </form>
</div>


<div class="page-foot">
    <p class="copyright">CopyRight &copy; Songheng. Ltd. All Rights Reserved</p>
    <p>为了获得最佳浏览体验，建议使用Chrome浏览器或者IE9以上版本，以及 1366x768 以上屏幕分辨率</p>
</div>


<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/jquery-1.12.4.min.js"></script>
<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/bootstrap.min.js"></script>
<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/jquery.form.min.js"></script>
<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/jquery.validate.min.js"></script>
<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/myAlert.js"></script>
<script src="<?php echo Yii::$app->request->baseUrl; ?>/js/login.js"></script>

</body>
</html>