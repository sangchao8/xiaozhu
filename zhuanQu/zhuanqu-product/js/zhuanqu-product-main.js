
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
        $('.js-address-Filter-a[tz-tm]').click(function () {
            var tz= $(this).attr('tz-tm');
        })
        $.ajax({
            type:'post',
            data:tz,
            dataType:'json',
            url:url,
            success:function () {
                $.getJSON(url,data,function () {
                    $data.each(function () {
                        var id="   <a class=\"recommend-product-a  mag20\" href=\"zhuanqu-product/index2.html\">\n" +
                            "                    <div class=\"recommend-product-list\">\n" +
                            "                        <div class=\"recommend-product-list-top\">\n" +
                            "                            <s class=\"recommend-product-list-a\"></s>\n" +
                            "                            <p class=\"recommend-product-p\">首投，民营</p>\n" +
                            "                        </div>\n" +
                            "                        <table class=\"recommend-product-list-table\">\n" +
                            "                            <tr class=\"b\">\n" +
                            "                                <td>起投额</td>\n" +
                            "                                <td>最高限额</td>\n" +
                            "                            </tr>\n" +
                            "                            <tr class=\"color\">\n" +
                            "                                <td>100元</td>\n" +
                            "                                <td>10000元</td>\n" +
                            "                            </tr>\n" +
                            "                            <tr class=\"b\">\n" +
                            "                                <td>小猪返利综合年化</td>\n" +
                            "                                <td>平台原年化</td>\n" +
                            "                            </tr>\n" +
                            "                            <tr class=\"color\">\n" +
                            "                                <td class=\"color-num\">0.98%</td>\n" +
                            "                                <td>0.8%</td>\n" +
                            "                            </tr>\n" +
                            "                            <tr class=\"b\">\n" +
                            "                                <td>标期</td>\n" +
                            "                                <td>风险评估</td>\n" +
                            "                            </tr>\n" +
                            "                            <tr class=\"color\">\n" +
                            "                                <td>1天</td>\n" +
                            "                                <td>89</td>\n" +
                            "                            </tr>\n" +
                            "                        </table>\n" +
                            "                        <button>立即投资</button>\n" +
                            "                    </div>\n" +
                            "                </a>"
                        var temp=template(id,data);
                       $('.recommend-product').append(temp);
                    });
                    //todo
                });
                
            }
        })
    }
    return{
        into:into
    }
}();
