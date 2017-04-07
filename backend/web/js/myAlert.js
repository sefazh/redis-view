/**
 * Created by ZhuangXiaofan on 2017/2/10 .
 */
//myAlert
(function () {

    function myAlert(content) {

        var title = arguments[1] ? arguments[1] : '提示'; //第二个参数
        var btn = arguments[2] ? arguments[2] : '确定';   //第三个参数

        var content = '' +
            '<div aria-hidden="false" aria-labelledby="myModalLabel" data-show="true" role="dialog" tabindex="-1" id="alertModal" class="modal fade">'+
            '	<div class="modal-dialog">'+
            '		<div class="modal-content">'+
            '			<div class="modal-header">'+
            '				<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>'+
            '				<h4 class="modal-title">'+title+'</h4>'+
            '			</div>'+
            '			<div class="modal-body">'+
            ''+
            content+
            ''+
            '			</div>'+
            '			<div class="modal-footer">'+
            '				<button type="button" class="btn btn-danger ok-btn"> '+btn+'</button>'+
            '			</div>'+
            '		</div>'+
            '	</div>'+
            '</div>'+
            '';
        var dfd = $.Deferred();

        var modal = $(content);
        $("body").append(modal);
        modal.find(".close").click(function () {
            modal.modal('hide');
        });

        modal.find(".ok-btn").click(function () {
            modal.modal('hide');
        });

        modal.on("hidden.bs.modal", function() {
            modal.remove();
            dfd.resolve();
        });

        modal.on("show.bs.modal", function() {
            centerModal(modal);
        });

        modal.modal();

        return dfd.promise();
    }

    $.myAlert = myAlert;

    //confirm
    function myConfirm(content) {

        var title = arguments[1] ? arguments[1] : '确认';     //第二个参数
        var ok = arguments[2] ? arguments[2] : '确定';        //第三个参数
        var cancel = arguments[3] ? arguments[3] : '取消';    //第四个参数

        var content = '' +
            '<div aria-hidden="false" aria-labelledby="myModalLabel" data-show="true" role="dialog" tabindex="-1" id="alertModal" class="modal fade">'+
            '	<div class="modal-dialog">'+
            '		<div class="modal-content">'+
            '			<div class="modal-header">'+
            '				<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>'+
            '				<h4 class="modal-title">'+title+'</h4>'+
            '			</div>'+
            '			<div class="modal-body">'+
            ''+
            content+
            ''+
            '			</div>'+
            '			<div class="modal-footer">'+
            '				<button type="button" class="btn btn-danger ok-btn"> '+ok+'</button>'+
            '				<button type="button" class="btn btn-default cancel-btn"> '+cancel+'</button>'+
            '			</div>'+
            '		</div>'+
            '	</div>'+
            '</div>'+
            '';
        var dfd = $.Deferred();

        var modal = $(content);
        $("body").append(modal);
        modal.find(".close").click(function () {
            modal.modal('hide');
        });

        modal.find(".ok-btn").click(function () {
            modal.modal('hide');
            dfd.resolve();
        });

        modal.find(".cancel-btn").click(function () {
            modal.modal('hide');
            dfd.reject();
        });

        modal.on("hidden.bs.modal", function() {
            modal.remove();
        });

        modal.on("show.bs.modal", function() {
            centerModal(modal);
        });

        modal.modal();

        return dfd.promise();
    }

    $.myConfirm = myConfirm;

    //prompt
    function myPrompt(content) {

        var title = arguments[1] ? arguments[1] : '输入';     //第二个参数
        var ok = arguments[2] ? arguments[2] : '确定';        //第三个参数
        var cancel = arguments[3] ? arguments[3] : '取消';    //第四个参数

        var content = '' +
            '<div aria-hidden="false" aria-labelledby="myModalLabel" data-show="true" role="dialog" tabindex="-1" id="alertModal" class="modal fade">'+
            '	<div class="modal-dialog">'+
            '		<div class="modal-content">'+
            '			<div class="modal-header">'+
            '				<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>'+
            '				<h4 class="modal-title">'+title+'</h4>'+
            '			</div>'+
            '			<div class="modal-body">'+

            '               <div class="form-group">' +
            '                   <label for="myPrompt-input">' + content + '</label>' +
            '                   <input type="text" class="form-control" id="myPrompt-input">'+
            '               </div>' +
            '			</div>'+
            '			<div class="modal-footer">'+
            '				<button type="button" class="btn btn-danger ok-btn"> '+ok+'</button>'+
            '				<button type="button" class="btn btn-default cancel-btn"> '+cancel+'</button>'+
            '			</div>'+
            '		</div>'+
            '	</div>'+
            '</div>'+
            '';
        var dfd = $.Deferred();

        var modal = $(content);
        $("body").append(modal);
        modal.find(".close").click(function () {
            modal.modal('hide');
        });

        modal.find(".ok-btn").click(function () {
            modal.modal('hide');
            dfd.resolve(modal.find("#myPrompt-input").val());
        });

        modal.find(".cancel-btn").click(function () {
            modal.modal('hide');
            dfd.reject();
        });

        modal.on("hidden.bs.modal", function() {
            modal.remove();
        });

        modal.on("show.bs.modal", function() {
            centerModal(modal);
        });

        modal.modal();

        return dfd.promise();
    }

    $.myPrompt = myPrompt;

    //垂直居中
    function centerModal(modal) {
        var $clone = modal.clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find(".modal-content").height()) / 2);
        top = top > 0 ? top-100 : 0;
        $clone.remove();
        modal.find(".modal-content").css("margin-top", top);
    }

})();
