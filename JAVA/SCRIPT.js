// JavaScript Document
jQuery(document).ready(function(e) {
    $(".nav>li").mouseover(function(e) {
        $(this).children(".submenu").stop().slideDown();
    });
	$(".nav>li").mouseleave(function(e) {
        $(this).children(".submenu").stop().slideUp();
    });
});


var win;
	function winOpen(){
		win=window.open('second contact.html','child','width=500,height=300')
	};
	

$(".moon").click(function(e) {
    $(".modal").show();
});
$(".modal p button").click(function(e) {
    $(".modal").hide();
});

$(".circle").click(function(e) {
    $(".modaltwo").show();
});
$(".modaltwo p button").click(function(e) {
    $(".modaltwo").hide();
});

$(".star").click(function(e) {
    $(".modalthree").show();
});
$(".modalthree p button").click(function(e) {
    $(".modalthree").hide();
});
