
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
        inputVerify();
        sufflling();
    };
    
    /**
     * 注册的验证和表单提交
     */
    var inputVerify = function () {
        $('.js-logging-input').click(function () {
                var tellNum=$('input[name="tell-num"]').val().trim();
                var reg = /^1[0-9]{10}$/; //验证规则
                var flag = reg.test(tellNum);
                if(tellNum&&flag){
                    $('input[name="tell-num"]').parent('.logging-input').css('border','1px solid #EDEDED');
                }else {
                    alert('请输入正确的手机号！');
                    $('input[name="tell-num"]').parent('.logging-input').css('border','1px solid red');
                    $('input[name="tell-num"]').focus();
                    return
                }
            var signPassword=$('.js-logging-input3').val().trim();
            var regu = /^[0-9a-zA-Z]{6,12}$/; 　//数字和字母组成的6-16位密码
            var flag2 = regu.test(signPassword);
            if(signPassword&&flag2){
                $('.js-logging-input3').parent('.logging-input').css('border','1px solid #EDEDED');
            }else {
                alert('请输入正确的密码！');
                $('.js-logging-input3').parent('.logging-input').css('border','1px solid red');
                $('.js-logging-input3').focus();
                return
            }
            var inputVal4 =  $('.js-logging-input4').prop("checked");
            if(inputVal4){
                $('#loggingFrom').submit();
            }
            else{
                alert('请勾选我已同意或阅读 《小猪理财用户协议》！');
                $('.js-logging-input4').css('border','1px solid red');
                return
            }
            var inputLength1 = $('input[name="invite-num"]').val().trim();
        });
    };
    
    return{
        into:into
    }
}();
