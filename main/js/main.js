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
        // --shuffling开始--
        shuffling();
      /*  dotShuffling();*/
        //--teamwork开始--
        teamScoll();
        ggsufflling();
    };
    //--teamwork开始--
    var  teamScoll = function(){
        $('.js-arrow-l').click(function () {
            var arr = $('.js-integral-product-list-a').length-1-5;
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
                $('.js-integral-product-list-a:lt(5)').appendTo($('.js-teamwork-box'));
                $('.js-teamwork-box').scrollLeft(0);
            });
        });
    };
    /**
     * 图片轮播
     */
    var shuffling=function () {
        var timerShuffling=setInterval(shuffle,2000);
        var index = 0;
        var imgLeth=$('.js-shuffling-div').length;
        var boxWidth = $('.js-shuffling').width();
        function shuffle(){
            index++;
            if (index==imgLeth) {index=0;}
            $(".js-shuffling").animate({"left":-(boxWidth*index)},500);
            $('.js-dot').eq(index).addClass('on');
            $('.js-dot').eq(index).siblings('a').removeClass('on');
        }
        $('.js-dot').hover(function () {
            clearInterval(timerShuffling);
            var index=$(this).index();
            $(this).addClass('on').siblings('a').removeClass('on');
            $(".js-shuffling").animate({"left":-(boxWidth*index)},500);
        },function () {
            /*var timerShuffling=setInterval(shuffle,2000);*/
           timerShuffling=setInterval(shuffle,2000);
        });
    }
    /*var shuffling = function () {
       timerShuffling=setInterval( shuffle,2000);
         var boxWidth = $('.js-shuffling').width();
           var curr = $('.js-shuffling').scrollLeft();
       function shuffle() {
           $('.js-shuffling').animate({scrollLeft:curr+boxWidth},500,function () {
               $('.js-shuffling-div:first').appendTo($('.js-shuffling'));
               $('.js-shuffling').scrollLeft(0);
               $('.js-shuffling-div').removeClass('on');
               $('.js-shuffling-div:first').addClass('on');
               $('.js-dot').removeClass('on');
               $('.js-dot').eq(indext-1).addClass('on');
           }
   };*/
   /* var dotShuffling = function () {
        $('.js-dot').mouseenter(function(){
            clearInterval(timerShuffling);
            $('.js-dot').removeClass('on');
            $(this).addClass('on');
            var imgIndex=$('.js-shuffling-div.on').attr('shuffingid')-1;
            var dotIndex=$(this).index();
            var _this = $(this);
            var boxWidth = $('.js-shuffling').width();
            var curr = $('.js-shuffling').scrollLeft();
            if(imgIndex>dotIndex){
                var dotIndex=_this.index()+1;
                $('.js-shuffling-div:first').before($('.js-shuffling-div[shuffingid='+dotIndex+']'));
                console.log($('.js-shuffling-div[shuffingid='+dotIndex+1+']'));
                $('.js-shuffling').scrollLeft(boxWidth);
                var curr = $('.js-shuffling').scrollLeft();
                $('.js-shuffling').animate({scrollLeft:curr-boxWidth},500);
            }else if(imgIndex<dotIndex) {
                $('.js-shuffling').scrollLeft(boxWidth);
                var curr = $('.js-shuffling').scrollLeft();
                $('.js-shuffling').animate({scrollLeft:curr+boxWidth},500,function () {
                    var dotIndex=_this.index();
                    $('.js-shuffling-div:lt('+dotIndex+')').appendTo($('.js-shuffling'));
                    $('.js-shuffling').scrollLeft(0);
                });
                // $('.js-shuffling').animate({scrollLeft:curr+boxWidth},500,function() {
                //     $('.js-shuffling-div.on').appendTo($('.js-shuffling'));
                //     $('.js-shuffling-div:first').addClass('on').siblings().removeClass('on');
                //     $('.js-shuffling').scrollLeft(0)
                // });
            }
        });
        $('.js-dot').mouseleave(function(){
            shuffling();
        });
    };*/
    /**
     * 公告轮播
     */
    var ggsufflling=function () {
        $('#J_scroll').width($('#J_scroll').width() - $('#J_scroll li:first-child').innerWidth());
        $('#J_scroll').addClass('theanimation');
    };
    
    return{
        into:into
    }
}();