var dateNow=new Date();
var dateName=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var showdate=dateNow.getFullYear() + "年"+(dateNow.getMonth() + 1) +"月"+dateNow.getDate()+ "日"+ " " + dateName[dateNow.getDay()];
$(".header>.header-top>.container>li.left").html(showdate);


$(function(){
    if(window.location.search) {
        var state = window.location.search.substring(4);
        $(".about-all .left-nav li:nth-child(" + state + ")").siblings('li').removeClass('active');
        $(".about-all .left-nav li:nth-child(" + state + ")").addClass('active');
        var preid = $(".about-all .left-nav li:nth-child(" + state + ")").attr("id");
        $("[id=" + preid + "-box]").addClass('us-box active');
        $("[id=" + preid + "-box]").siblings('ul').removeClass('active');
    }
    $(".about-all .left-nav li").click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var preid=$(this).attr("id");
        $("[id="+preid+"-box]").addClass('us-box active');
        $("[id="+preid+"-box]").siblings('ul').removeClass('active');
    });
})


