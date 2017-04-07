/**
 * Created by ZhuangXiaofan on 2017/2/10 .
 */
/* 菜单栏js */
(function() {
    var height = 50;

    $("body").on('click', '.menu>ul>li', function() {
        if ($('body').hasClass('menu-collapse')) return;
        if ($(this).hasClass("list-active")) {
            listHide($(this));
            return;
        }

        listHide($(".sub-list.list-active"));
        $(".active").removeClass("active");

        if ($(this).hasClass("sub-list")) {
            listShow($(this));
        } else {
            $(this).addClass("active");
        }
    });

    $("body").on('click', '.subMenu>li', function(event) {
        if ($('body').hasClass('menu-collapse')) return;
        $(".active").removeClass("active");
        $(this).addClass("active");
        listShow($(this).parent().parent());

        event.stopPropagation();
    });

    if ($(".sub-list.list-active").children(".subMenu").length) {
        subMenuShow($(".sub-list.list-active").children(".subMenu"));
    }

    function listShow(dom) {
        dom.addClass("list-active");
        subMenuShow(dom.children(".subMenu"));
    }

    function listHide(dom) {
        dom.removeClass("list-active");
        subMenuHide(dom.children(".subMenu"));
    }

    function subMenuShow(dom) {
        var num = dom.children("li").length;
        dom.css({height: num * height});
    }
    function subMenuHide(dom) {
        dom.css({height: 0});
    }


    /**
     * 菜单栏收缩
     */
    $('body').on('click', '.tool-bar .toggle-btn', function() {
        $('body').toggleClass('menu-collapse');
        setCookie('menu_collapse', $('body').hasClass('menu-collapse'));
    });

    /**
     * 移动端顶部下拉列表
     */
    $('body').on('click', '.tool-bar .section-2-btn a', function() {
        var $btn = $(this).children('i');
        if ($btn.hasClass('fa-chevron-down')) {
            $btn.removeClass('fa-chevron-down');
            $btn.addClass('fa-chevron-up');
            $('.tool-bar .section-2').toggle();
        } else {
            $btn.removeClass('fa-chevron-up');
            $btn.addClass('fa-chevron-down');
            $('.tool-bar .section-2').toggle();
        }
    });


    //写入cookie
    function setCookie(name,value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=/";
    }
})(jQuery);