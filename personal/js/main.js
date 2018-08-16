var main = function () {
    var into = function () {
        changeTab();
        popUp();
    };
    /**
     * 个人中心菜单的切换（template生产模板）
     */
    var changeTab = function () {
        $('.js-personal-tab > li').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var dataUrl = $(this).attr('data-url');
            var _this = $(this);
            var templateId = _this.attr('data-temp-id');
            
            if(dataUrl){
                $.getJSON(dataUrl,function (data) {
                    var content = template(templateId,data);
                    $('.js-persional-main').html(content);
                });
            }else{
                var content = template(templateId,null);
                $('.js-persional-main').html(content);
            }
    
            layui.use('form', function(){
                var form = layui.form;
                form.render('select');
    
               /* form.on('select', function(data){
                    console.log(data.elem); //得到select原始DOM对象
                    console.log(data.value); //得到被选中的值
                    console.log(data.othis); //得到美化后的DOM对象
                });*/
            });
        });
        
        $('.js-personal-tab > li:first').click();
    };
    
    /**
     * 个人中心菜单的提交绑定（ajax数据提供验证）
     */
    var popUp = function () {
        $('.js-persional-main').delegate('.js-text-r-f-but','click',function (){
            var formName =$(".js-persional-main form").attr("id");
            var formData = $(formName).serialize();
            // console.log(formData);
            var $this = $(this);
            $.ajax({
                type:'post',
                url:'json/bind-success.json',
                data:formData,
                dataType:'json',
                success:function (data) {
                    if('00' === data.code){
                        var n = $this.attr('submitId');
                        // console.log($(this).attr('submitId'));
                        $('.js-lc-fx-fixed').children().hide();
                        $('.js-lc-fx-fixed').show();
                        $('.js-lc-fx-fixed>div[submitId='+n+']').fadeIn();
                    }else{
                        alert(data.msg);
                    }
                }
            });
            
        });
        /**
         * 个人中心里的邀请记录翻页切换
         */
        $('.js-persional-main').delegate('.js-next-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/yqjl-page1.json',{currPage:currPage+1},function (data) {
                var gg = template('invite-friends', data);
                $('.js-persional-main').html(gg);
            });
        });
        $('.js-persional-main').delegate('.js-pre-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/yqjl.json',{currPage:currPage-1},function (data) {
                var gg = template('invite-friends', data);
                $('.js-persional-main').html(gg);
            });
        });
        /**
         * 点击提交按钮，对应div弹出
         */
        $('.js-text-r-f-but-1').click(function (e) {
            var n = $(this).attr('submitId');
            $('.js-lc-fx-fixed').children().hide();
            $('.js-lc-fx-fixed').show();
            $('.js-lc-fx-fixed>div[submitId='+n+']').show();
        });
        /**
         * 点击遮罩层，盒子隐藏
         */
        $('.js-lc-fx-fixed').click(function (e) {
            //只有点击js-lc-fx-fixed 时蒙层消失，过滤掉冒泡事件
            if($(e.target).hasClass('js-lc-fx-fixed')){
                $('.js-lc-fx-fixed').hide();
            }
        });
        /* var takeSuccse = function () {
       $('.js-lc-fx-pop-buttom').on('click',function (e){
           var n = $(this).parent().attr('submitId');
           $('.js-takeSuccse[submitId='+n+']').fadeIn().siblings().fadeOut();
           // $('.js-takeSuccse').fadeIn();
           e.stopPropagation();
       });
   };*/
    };
    
  
    /**
     * 提交表单邀请好友里的复制链接
     */
    var login = function () {
        $('.js-loggingOn').click(function () {
            $('#loggingForm').submit();
        });
    };
    
    
    return{
       into:into
    }
}();

var head = function () {
    var init = function () {
        // --head开始--
        headTab();
        signTab();
    };
    
    //--head开始--
    var headTab = function () {
        $('.js-headNav-li').click(function () {
            // console.log($('.js-headNav-ul>li>a'));
            $(this).children().addClass('on');
            $(this).siblings().children().removeClass('on');
        });
    };
    var signTab = function () {
        $('.js-logging-a').click(function () {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });
    };
    
    return{
        init:init
    }
}();