var head = function () {
    var init = function () {
        // --head开始--
        headTab();
        signTab();
        itemSelect();
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
    var itemSelect=function () {
        var loadprd=  function(){
            var proType = $('.js-address-Filter-a[pro-type].on').attr('pro-type');
            var tcBak = $('.js-address-Filter-a[tc-bak].on').attr('tc-bak');
            var tzTm = $('.js-address-Filter-a[tz-tm].on').attr('tz-tm');
            var fx = $('.js-address-Filter-a[fx].on').attr('fx');
            
            $.ajax({
                type:'post',
                data:{proType:proType,tcBak:tcBak,tzTm:tzTm,fx:fx},
                dataType:'json',
                url:url,
                success:function (data) {
                    data.forEach(function (item,index) {
                        var div="<div><p></p></div>";
                        $('.recommend-product').append(div);
                    });
                }
            })
        }
        
        $('.js-address-Filter-a').click(function () {
            loadprd();
        })
    }
    return{
        into:into
    }
}();