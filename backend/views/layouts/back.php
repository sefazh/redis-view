<?php
use \yii\helpers\Url;
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>backend</title>
    <!--<link rel="icon" href="https://mini.eastday.com/favicon.ico">-->
    <link rel="stylesheet" href="<?php echo Yii::$app->request->baseUrl; ?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo Yii::$app->request->baseUrl; ?>/css/bootstrap-reset.css">
    <link rel="stylesheet" href="<?php echo Yii::$app->request->baseUrl; ?>/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo Yii::$app->request->baseUrl; ?>/css/main.css">
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::$app->request->baseUrl; ?>/js/nprogress/nprogress.css">


    <!--[if lt IE 9]>
    <script src="<?php echo Yii::$app->request->baseUrl; ?>/js/html5shiv.js"></script>
    <script src="<?php echo Yii::$app->request->baseUrl; ?>/js/respond.min.js"></script>
    <![endif]-->
</head>
<body <?php if (Yii::$app->request->cookies['menu_collapse'] == 'true') echo 'class="menu-collapse"'; ?>>
<!--    head    -->
<div class="page-head">
    <block name="top">
        <div class="header">
            <div class="brand">
<!--                <img src="https://mini.eastday.com/favicon.ico" alt="" class="logo">-->
                <div class="logo">Logo</div>
                <a href="<?= Url::to('home/index') ?>">简陋的后台</a>
            </div>
            <div class="tool-bar">
                <div class="section-1">
                    <a href="javascript: void(0);" class="toggle-btn">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <?php /*$this->widget('application.widgets.TopBarWidget', [
                    'data' => [
                        ['登录页', '/login'],
                        ['欢迎，'.BaseService::loginUser()['nickname'], ''],
                        ['下拉菜单', 'dropdown', [
                            ['Action', ''],
                            ['Another action', ''],
                            ['Something else here', ''],
                            ['', 'separator'], //分隔线
                            ['Separated link', ''],
                        ]],
                        ['<i class="fa fa-sign-out"></i>注销', '/login/logout'],
                    ]
                ]);*/?>
                <div class="section-2-btn">
                    <a href="javascript: void(0);">
                        <i class="fa fa-chevron-down"></i>
                    </a>
                </div>
            </div>
        </div>
    </block>
</div>

<!--    left    -->
<div class="left-side">
    <?php /*$this->widget('application.widgets.MenuWidget', [
        'menu' => BaseService::getInstance()->getMenu(),
    ]);*/?>
</div>

<!--    right    -->
<div class="right-side">
    <?php /*$this->widget('application.widgets.BreadcrumbWidget', [
        'breadcrumb' => BaseService::getInstance()->getBreadcrumb()
    ]);*/?>

    <div class="main">
        <?=$content?>
    </div>
</div>

<!--    footer    -->
<block name="footer"></block>

<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/bootstrap.min.js"></script>
<!--nprogress-->
<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/nprogress/nprogress.js"></script>
<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/nprogress/nprogress-init.js"></script>

<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/main.js"></script>
<script type="text/javascript" src="<?php echo Yii::$app->request->baseUrl; ?>/js/myAlert.js"></script>

<block name="js"></block>
</body>
</html>