$(function(){
	var icatch = $("#eye_catch");	//繧ｳ繝ｳ繝�Φ繝�ｦ∫ｴ�
	var copy = $("#catch_copy");	//繝�く繧ｹ繝�
	var mask = $("#mask");	//逋ｽ繝槭せ繧ｯ
	
	mask.hide("fade", function(){
		copy.show("fade", 1000);
	}, 1000);
	
	icatch.animate({
		backgroundSize: "100%"
	}, 3000, function(){
		mask.show("fade", function(){
			icatch.css({
				"background-image": "url('./images/main2.jpg')",
				"background-size": "120%"
			});
			copy.hide().children("p").html("蠑顔､ｾ縺御ｿ｡鬆ｼ縺輔ｌ繧狗炊逕ｱ");
			mask.hide("fade", function(){
				copy.show("fade", 1000);
			}, 1000);
			
			icatch.animate({
				backgroundSize: "100%"
			}, 3000, function(){
				mask.show("fade", function(){
					icatch.css("background", "none");
					copy.hide();
					mask.hide("fade", function(){
						$("#main_img").show("fade", 1500);
					}, 1000);
				}, 1000);
			});
			
		}, 1000);
	});

});