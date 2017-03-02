// JavaScript Document
$(document).ready(function () {

    $("#mask").append('<div class="mask-box"><div class="page" ><div class="point"><h2>欢迎登录特种设备保险网！请以填写真实有效的信息</h2></div><div class="mask-close" id="mask-close1">X</div><hr/><div class="newPage"><div class="right" style="margin-right: 20px"><img src="images/finpwd.jpg" alt=""/></div><div class="progress"><p class="top"><span class="active">1</span><span>2</span><span>3</span><span>4</span></p><p class="bto"><span class="active">填写用户</span><span>验证身份</span><span>设置新密码</span><span>完成</span></p></div><div class="user_types"><form method="POST" action="" accept-charset="UTF-8" class="form1"><ul class="ul01"><li><i></i>手机号：<input type="text" name="mobile" class="data-mobile" data-type="1" > <span>请输入正确的11位手机号</span></li><li><i></i>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：<input type="text" name="email" class="data-email" data-type="2" > <span>邮箱地址不正确，请检查</span></li></ul><input type="hidden" class="type_sub" name="type"><div class="sub01"><a id="next1" onclick="hideMask1()">下一步</a></div></form></div></div></div></div>')

    $("#mask1").append('<div class="mask-box"><div class="page" ><div class="point"><h2>欢迎登录特种设备保险网！请以填写真实有效的信息</h2> </div><div class="mask-close" id="mask-close2">X</div><hr/><div class="newPage"><div class="right" style="margin-right: 20px"> <img src="images/finpwd.jpg" alt=""/></div><div class="progress"><p class="top"><span class="active">1</span><span class="active">2</span><span>3</span><span>4</span></p> <p class="bto"><span class="active">填写用户</span><span>验证身份</span><span>设置新密码</span><span>完成</span></p></div><div class="user_types"><form method="post" action="" accept-charset="UTF-8" class="form1"><ul class="ul01"><li>用户名称：<input type="text" name="username"/></li><li>&nbsp;&nbsp;手&nbsp;机&nbsp;号：<input type="text" name="mobile" class="data-mobile" data-type="1" ><span>请输入正确的11位手机号</span></li><li class="getCode"> &nbsp;&nbsp;验&nbsp;证&nbsp;码：<input type="text" name="username"/><a href="#" class="get-code">获取验证码</a> </li><li>&nbsp;&nbsp;证&nbsp;件&nbsp;号：<input type="text" name="username"/></li></ul><input type="hidden" class="type_sub" name="type"><div class="sub01"><a onclick="hideMask2()">下一步</a></div></form></div></div></div></div>')

    $("#mask2").append('<div class="mask-box"><div class="page" ><div class="point"><h2>欢迎登录特种设备保险网！请以填写真实有效的信息</h2> </div><div class="mask-close" id="mask-close3">X</div><hr/><div class="newPage"><div class="right" style="margin-right: 20px"><img src="images/finpwd.jpg" alt=""/></div><div class="progress"><p class="top"><span class="active">1</span><span class="active">2</span><span class="active">3</span><span>4</span></p><p class="bto"><span class="active">填写用户</span><span>验证身份</span><span>设置新密码</span><span>完成</span></p></div><div class="user_types"><form method="post" action="" accept-charset="UTF-8" class="form1"><ul class="ul01"><li>设置密码：<input type="text" name="setpwd"/><b>请输入6-12位的密码</b></li><li>确认密码：<input type="text" name="ensurepwd"/><b>请确认密码</b></li></li></ul><input type="hidden" class="type_sub" name="type"><div class="sub01"><a onclick="hideMask3()">完成</a></div></form></div></div></div></div>')

    $("#mask3").append('<div class="mask-box"><div class="page" ><div class="point"><h2>欢迎登录特种设备保险网！请以填写真实有效的信息</h2> </div><div class="mask-close" id="mask-close4">X</div><hr/><div class="newPage"><div class="right" style="margin-right: 20px"><img src="images/finpwd.jpg" alt=""/></div><div class="progress"><p class="top"><span class="active">1</span><span class="active">2</span><span class="active">3</span><span class="active">4</span></p><p class="bto"><span class="active">填写用户</span><span>验证身份</span><span>设置新密码</span><span>完成</span></p></div> <div class="user_types"><input type="hidden" class="type_sub" name="type"><div class="sub01"><a class="finish">完成</a></div></div></div></div></div>')

    $("#mask-close1").click(function() {
        $("#mask").hide();
    })
    $("#mask-close2").click(function() {
        $("#mask1").hide();
    })
    $("#mask-close3").click(function() {
        $("#mask2").hide();
    })
    $("#mask-close4").click(function() {
        $("#mask3").hide();
    })
    $("#mask-close5").click(function(){
        $("#mask4").hide();
    });
    $("#resets").click(function(){
        $("#mask4").hide();
    });
    $(".finish").click(function() {
        $("#mask3").hide();
    })
});
//console.log($("#next1"));
$(".buttonShow").click(function(){
    $("#mask").show();
});
$(".register").click(function(){
    $("#mask4").show();
});

function hideMask1(){
    $("#mask").hide();
    $("#mask1").show();
}
function hideMask2(){
    $("#mask1").hide();
    $("#mask2").show();
}
function hideMask3(){
    $("#mask2").hide();
    $("#mask3").show();
}
$(function () {
    var a = $(".data-mobile"), t = $(".data-email"), s = $("ul.ul01 li:eq(0) span"), i = $("ul.ul01 li:eq(1) span"), l = $("ul.ul01 li:eq(0) i"), e = $("ul.ul01 li:eq(1) i"), c = $(".sub01 a"), u = /^1[3-9][0-9]\d{8}$/, v = /^[\w\-]+@[0-9a-z\-]+(\.[a-z]{2,4}){1,2}$/;
    a.blur(function () {
        "" != $(this).val() && (u.test(a.val()) || s.show())
    }), t.blur(function () {
        "" != $(this).val() && (v.test(t.val()) || i.show())
    }), a.focus(function () {
        s.hide(), i.hide(), e.removeClass("active"), l.addClass("active")
    }), t.focus(function () {
        s.hide(), i.hide(), l.removeClass("active"), e.addClass("active")
    }), l.click(function () {
        e.removeClass("active"), l.addClass("active")
    }), e.click(function () {
        l.removeClass("active"), e.addClass("active")
    }), c.click(function () {
        e.hasClass("active") ? v.test(t.val()) ? ($(".type_sub").val(t.attr("data-type")), $(".form1").submit()) : i.show() : l.hasClass("active") && (u.test(a.val()) ? ($(".type_sub").val(a.attr("data-type")), $(".form1").submit()) : s.show())
    })
});





