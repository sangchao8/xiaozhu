var jfdhMain = function () {
    var into = function () {
        popUp();
        ljExchange();
    };
    var popUp = function () {
        $('.js-text-r-f-but').click(function () {
            $('.js-lc-fx-fixed').fadeIn();
        });
    };
    var ljExchange = function () {
        $('.js-lc-fx-pop-buttom').click(function () {
            var formData = $('#ljExchange').serialize();
            // console.log(formData);
            $.ajax({
                type:"post",
                url:"../../personal/json/bind-success.json",
                data:formData,
                dataType:"json",
                success:function (data) {
                   if("00"===data.code){
                       $('.jf-dh-pop').hide();
                       $('.js-take-1').show();
                   }
                }
            });
        });
        $('.js-lc-fx-fixed').click(function (e) {
            //只有点击js-lc-fx-fixed 时蒙层消失，过滤掉冒泡事件
            if($(e.target).hasClass('js-lc-fx-fixed')){
                $('.js-lc-fx-fixed').hide();
                $('.jf-dh-pop').show();
                $('.js-take-1').hide();
            }
        });
    };
    return{
        into:into
    }
}();
