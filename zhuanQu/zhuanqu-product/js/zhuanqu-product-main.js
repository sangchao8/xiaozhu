
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
    };
    return{
        into:into
    }
}();
