/**
 * Created by ZhuangXiaofan on 2017/2/10 .
 */
(function() {
    $(function() {
        $('#loginForm').validate({
            rules: {
                account: "required",
                password: "required",
            },
            messages: {
                account: "请输入用户名",
                password: "请输入密码",
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, $form) {
                        if (statusText != "success") {
                            $.myAlert("网络异常");
                            return;
                        }

                        if (responseText == "success") {
                            location.href = "/home";
                        } else {
                            $.myAlert("用户名或密码错误");
                        }
                    }
                });
            }
        });
    });
})();