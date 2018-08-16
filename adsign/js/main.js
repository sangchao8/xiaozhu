var main = function () {
    var init = function () {
        // --head开始--
        headTab();
        signTab();
        //--shuffling开始--
        // shuffling();
        //--teamwork开始--
        // teamwork1();
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
    
   /* var timer = null;
    var shuffling = function(){
        timer=setInterval( function () {
            var boxWidth = $('.js-shuffling').width();
            var curr = $('.js-shuffling').scrollLeft();
            var i =$(".js-shuffling-div").length;
            console.log(i);
                $('.js-shuffling').animate({scrollLeft: curr + boxWidth}, 1000, function () {
                    var n = curr + boxWidth;
                    var a = i*boxWidth;
                    // if(a==n){
                    //     $('.js-shuffling-div:first').appendTo($('.js-shuffling'));
                    //     // $('.js-shuffling-div:first').appendTo($('.js-shuffling'));
                    //     // $('.js-shuffling>js-shuffling-div:first').addClass('on').siblings('').removeClass('on');
                    //     $('.js-shuffling').scrollLeft(0);
                    //     $('.js-shuffling').animate({scrollLeft: curr + boxWidth}, 1000)
                    //     // var src1 = $('.js-shuffling>.js-shuffling-div.on').attr('src');
                    //     // var dot = $('.raduis>.js-dot-2[imgsrc="' + src1 + '"]');
                    //     // dot.addClass('raduis-select').siblings().removeClass('raduis-select');
                    // }else {
                    //     shuffling();
                    // }
                    
                   
        
                });
            // }
        },2000);
    };
    //--teamwork开始--
    var teamwork1 = function(){
        $('.js-arrow-l').click(function () {
            debugger;
            var arr = $('.js-integral-product-list-a').length-1-4;
            $('.js-integral-product-list-a:first').before($('.js-integral-product-list-a:gt('+arr+')'));
            var boxWidth = $('.js-teamwork-box').width();
            $('.js-teamwork-box').scrollLeft(boxWidth);
        
            var curr = $('.js-teamwork-box').scrollLeft();
            $('.js-teamwork-box').animate({scrollLeft:curr-boxWidth},500);
        });
        $('.js-arrow-r').click(function () {
            var boxWidth = $('.js-teamwork-box').width();
            var curr = $('.js-teamwork-box').scrollLeft();
            // console.log(imgWidth);
            $('.js-teamwork-box').animate({scrollLeft:curr+boxWidth},500,function () {
                $('.js-integral-product-list-a:lt(4)').appendTo($('.js-teamwork-box'));
                $('.js-teamwork-box').scrollLeft(0);
            });
        });
    };*/
    
    
    return{
        init:init
    }
}();

