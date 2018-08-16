var main = function () {
    var init = function () {
        // --head开始--
        headTab();
        // --fixed开始--
        fixedOpen();
    };
    //--head开始--
    /**
     *  菜单栏切换
     */
    var headTab = function () {
        $('.js-headNav-li').click(function () {
            // console.log($('.js-headNav-ul>li>a'));
            $(this).children().addClass('on');
            $(this).siblings().children().removeClass('on');
        });
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
        init:init
    }
}();

