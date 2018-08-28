
var zqMain = function () {
    var into = function () {
        popUp();
        tiaoZhuan();
    };
    var popUp = function () {
       $('.js-text-r-f-but').click(function () {
           $('.js-lc-fx-fixed').fadeIn();
       });
    };
    var tiaoZhuan = function () {
        $('.js-lc-fx-pop-buttom').click(function () {
            var urlZhuan = $(this).attr('url');
            console.log(urlZhuan);
            window.location.href=urlZhuan;
        });
        $(".js-lc-fx-fixed").click(function () {
            if($(this).hasClass('js-lc-fx-fixed')){
                $(this).hide();
            }
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
