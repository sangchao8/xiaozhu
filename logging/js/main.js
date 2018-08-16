var head = function () {
    var init = function () {
        // --head开始--
        headTab();
        inputVerify();
    };
    //--head开始--
    /**
     * 首页tab切换
     */
    var headTab = function () {
        $('.js-headNav-li').click(function () {
            $(this).children().addClass('on');
            $(this).siblings().children().removeClass('on');
        });
        $('.js-logging-a').click(function () {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });
    };
    /**
     * 登录的验证和表单提交
     */
    var inputVerify = function () {
        $('.js-logging-but').click(function () {
            var dataInput = $('.js-logging-input[name=ID]').val().trim();
            
            var errAlt = function (dom, text) {
                alert("请重新输入" + text + "！");
                $(dom).focus();
                $(dom).css("border", "1px solid red");
            };
            if (dataInput) {
                $('.js-logging-input[name=ID]').css("border", "1px solid #EDEDED");
                var dataInput = $('.js-logging-input[name=password]').val().trim();
                if (dataInput) {
                    $('.js-logging-input[name=password]').css("border", "1px solid #EDEDED");
                    $("#loggingFrom").submit();
                    console.log($("#loggingFrom"));
                } else {
                    var text = "密码";
                    var dom = ".js-logging-input[name=password]";
                    errAlt(dom, text);
                }
            } else {
                var text = "账号";
                var dom = ".js-logging-input[name=ID]";
                errAlt(dom, text);
            }
           
        });
    };
    
    return {
        init: init
    }
}();

