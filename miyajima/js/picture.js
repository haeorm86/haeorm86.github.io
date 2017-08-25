$(function(){
	setTimeout("rect()");
});

function rect() {
	$("#pict1, #pict3").animate({
		marginTop: "-=10px"
	}, 1000).animate({
		marginTop: "+=10px"
	}, 1000);
	
	$("#pict2").animate({
		marginTop: "-=10px"
	}, 750).animate({
		marginTop: "+=10px"
	}, 750);
	
	setTimeout("rect()");
}