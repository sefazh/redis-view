<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
/**
 * HomeController.php
 * @Author: zhuangxiaofan
 * @Date: 2017/3/23
 * @Time: 14:32
 */
class HomeController extends Controller
{
    public $layout = 'back';

    public function actionIndex()
    {

        return $this->render('index');

    }

    public function actionAuth1() { $this->show(); }
    public function actionAuth2() { $this->show(); }
    public function actionAuth3() { $this->show(); }
    public function actionAuth4() { $this->show(); }
    public function actionAuth5() { $this->show(); }
    public function actionAuth6() { $this->show(); }
    public function actionAuth7() { $this->show(); }
    public function actionAuth8() { $this->show(); }
    public function actionAuth9() { $this->show(); }
    public function actionAuth10(){ $this->show(); }

    private function show()
    {
        $controller = $this->getId();
        $action = $this->getAction()->getId();
        return $this->render('index', ['controller'=>$controller, 'action' => $action]);
    }

}