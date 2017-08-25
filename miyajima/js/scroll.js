$(function(){
	var headerHight = 0; //繝倥ャ繝縺ｮ鬮倥＆
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight; //繝倥ャ繝縺ｮ鬮倥＆蛻�ｽ咲ｽｮ繧偵★繧峨☆
		$("html, body").animate({scrollTop:position}, 500, "swing");
		return false;
	});
});