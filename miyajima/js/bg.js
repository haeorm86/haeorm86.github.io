$(function () {
		setTimeout("move_bg()");
});

function move_bg() {
	$("#work, #recruite").animate({
		backgroundSize: "2020px"
	}, 3000).animate({
		backgroundSize: "1920px"
	}, 3000);
	
	setTimeout("move_bg()");
}