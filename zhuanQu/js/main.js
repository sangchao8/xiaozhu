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


var main = function () {
    var into = function () {
        addressTab();
    };
    var addressTab = function () {
        $('.js-address-Filter-a').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    };
    
    return{
        into:into
    }
}();