var main = function () {
    var into = function () {
      
        // --fixed开始--
        fixedOpen();
        ChangeTab();
       /* pagingNotice();*/
    };
    
    // --fixed开始--
    /**
     * fixed出现
     */
    var fixedOpen = function () {
        $(window).scroll(function () {
            var h=$(this).scrollTop();//获得滚动条距top的高度
            if(h>10){
                $(".js-fixed").css("position","fixed");
            }else {
                $(".js-fixed").css("position","");
            }
        });
    };
    
    var ChangeTab = function () {
        /**
         * 关于我们的菜单temlpete切换
         */
        $('.js-fixed-link').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var templateId = $(this).attr('data-temp-id');
            var dataUrl = $(this).attr('data-url');
            if(dataUrl){
                $.getJSON(dataUrl,function (data) {
                    var content = template(templateId,data);
                    $('.js-ours-content').html(content);
                });
            }else {
                var content = template(templateId,null);
                $('.js-ours-content').html(content);
            }
        });
       
        $('.js-fixed-link:first').click();//默认第一个点击（公司简介）
        /**
         * 网站公告里的翻页切换
         */
        $('.js-ours-content').delegate('.js-next-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/wzgg.json',{currPage:currPage+1},function (data) {
                var gg = template('ours-gg', data);
                $('.js-ours-content').html(gg);
            });
        });
    
        $('.js-ours-content').delegate('.js-pre-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/wzgg-page1.json',{currPage:currPage-1},function (data) {
                var gg = template('ours-gg', data);
                $('.js-ours-content').html(gg);
            });
        });
    };
    
   /* var pagingNotice = function () {
        $.getJSON('json/wzgg-page1.json',{currPage:1},function (data) {
            var gg = template('ours-gg', data);
            $('.js-ours-content').html(gg);
        });
        
        $('.js-ours-content').delegate('.js-next-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/wzgg.json',{currPage:currPage+1},function (data) {
                var gg = template('ours-gg', data);
                $('.js-ours-content').html(gg);
            });
        });
        
        $('.js-ours-content').delegate('.js-pre-page','click',function () {
            var currPage = $(this).parents('.js-invite-record-page').attr('currpage');
            $.getJSON('json/wzgg-page1.json',{currPage:currPage-1},function (data) {
                var gg = template('ours-gg', data);
                $('.js-ours-content').html(gg);
            });
        });
    };*/
    
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
