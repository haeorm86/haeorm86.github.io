$(function(){
	var work_top = $("#work").offset().top;
	var scroll_top = 0;
	var navi = $("#navi");
	
	//リサイズ処理
	var timer = false;
	$(window).resize(function(){
		if(timer !== false){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			work_top = $("#work").offset().top;
		}, 200);
	});
	
	//スクロール処理
	$(document).scroll(function(){
		scroll_top = $(this).scrollTop();
		
		if(work_top <= scroll_top){
			if(!navi.hasClass("show")){
				navi.show("clip", 200).addClass("show");
			}
		}
		else if(work_top >= scroll_top){
			if(navi.hasClass("show")){
				navi.hide("clip", 200).removeClass("show");
			}
		}
	});
});