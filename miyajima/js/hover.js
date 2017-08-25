$(function () {
	$("#send").hover(function(){
		$("#send img").attr("src", "./images/send_on.png");
	}, function(){
		$("#send img").attr("src", "./images/send_off.png");
	});
});