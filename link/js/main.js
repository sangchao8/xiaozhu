var main = function () {
    var into = function () {
        // --fixed开始--
        fixedOpen();
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


