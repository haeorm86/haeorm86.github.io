$(function() {
	
	//合計金額
	function price(){
		var time = 0;
		var sum = 0;
		
		for(i = 0; i < 6; i++){
			course_time = $('.selected:eq(' + i + ') p:eq(1)').html();
			course_price = $('.selected:eq(' + i + ') p:eq(2)').html();
			
			if(course_price){
				time += parseInt(course_time.substr( 0, course_time.length-1 ));
				sum += parseInt(course_price.substr( 0, course_price.length-1 ));
			}
		}
		
		$('#course_price').html(sum.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' ) + '円');
		$('#tax').html(parseInt(sum * 0.08).toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' ) + '円');
		$('#time').html(time + '分');
		$('#sum_price').html(parseInt(sum * 1.08).toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' ) + '円');
		
		$("input[name='all_time']").val(time);
		$("input[name='all_price']").val(parseInt(sum * 1.08));
	}
	
	//サブミット
	$("input[type='submit']").on("click", function(){
		if($("#sum_price").html() == "0円"){
			alert("コースを選択してください。");
			return false;
		}
	});
	
	//ここから下コース選択
	var select_all = [0,0,0,0,0,0,0];
	$('.select_care').on("click", function(){
		
		$('.select_care').css('background-image','url(./images/course/select_off.png)');
		$('.select_care p').css('color', '#fff');
		$("input[name='care']").val(null);
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.selected:eq(0)').html("");
			select_all[0] = 0;
			$("input[name='course']").val(select_all);
		}
		
		else{
			$(this).parent().children('.on').removeClass('on');
			$(this).css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$('p', this).css('color', '#777');
			
			$('.selected:eq(0)').html(
				"<p>" + $('p:eq(0)',this).html() + "</p><p>" + $('p:eq(1)',this).html() + "</p><p>" + $('p:eq(2)',this).html() + "</p>"
			);
			
			var select_no = $('p:eq(3)', this).html();
			select_all[0] = select_no;
			$("input[name='course']").val(select_all);
		}
		price();
	});
	
	$('.select_water').on("click", function(){
		
		$('.select_water').css('background-image','url(./images/course/select_off.png)');
		$('.select_water p').css('color', '#fff');
		$("input[name='water']").val(null);
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.selected:eq(1)').html("");
			select_all[1] = 0;
			$("input[name='course']").val(select_all);
		}
		
		else{
			$(this).css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$('p', this).css('color', '#777');
			
			$('.selected:eq(1)').html(
				"<p>" + $('p:eq(0)',this).html() + "</p><p>" + $('p:eq(1)',this).html() + "</p><p>" + $('p:eq(2)',this).html() + "</p>"
			);
			
			var select_no = $('p:eq(3)', this).html();
			select_all[1] = select_no;
			$("input[name='course']").val(select_all);
		}
		price();
	});
	
	$('.select_gel').on("click", function(){
		
		$('.select_gel').css('background-image','url(./images/course/select_off.png)');
		$('.select_gel p').css('color', '#fff');
		$("input[name='gel']").val(null);
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.selected:eq(2)').html("");
			select_all[2] = 0;
			$("input[name='course']").val(select_all);
		}
		
		else{
			$(this).parent().children('.on').removeClass('on');
			$(this).css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$('p', this).css('color', '#777');
			
			$('.selected:eq(2)').html(
				"<p>" + $('p:eq(0)',this).html() + "</p><p>" + $('p:eq(1)',this).html() + "</p><p>" + $('p:eq(2)',this).html() + "</p>"
			);
			
			var select_no = $('p:eq(3)', this).html();
			select_all[2] = select_no;
			$("input[name='course']").val(select_all);
		}
		price();
	});

	$('.select_art').on("click", function(){
		
		$('.select_art').css('background-image','url(./images/course/select_off.png)');
		$('.select_art p').css('color', '#fff');
		$("input[name='art']").val(null);
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.selected:eq(3)').html("");
			select_all[3] = 0;
			$("input[name='course']").val(select_all);
		}
		
		else{
			$(this).parent().children('.on').removeClass('on');
			$(this).css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$('p', this).css('color', '#777');
			
			$('.selected:eq(3)').html(
				"<p>" + $('p:eq(0)',this).html() + "</p><p>" + $('p:eq(1)',this).html() + "</p><p>" + $('p:eq(2)',this).html() + "</p>"
			);
			
			var select_no = $('p:eq(3)', this).html();
			select_all[3] = select_no;
			$("input[name='course']").val(select_all);
		}
		price();
	});

	$('.select_foot').on("click", function(){
		
		$('.select_foot').css('background-image','url(./images/course/select_off.png)');
		$('.select_foot p').css('color', '#fff');
		$("input[name='foot']").val(null);
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.selected:eq(4)').html("");
			select_all[4] = 0;
			$("input[name='course']").val(select_all);
		}
		
		else{
			$(this).parent().children('.on').removeClass('on');
			$(this).css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$('p', this).css('color', '#777');
			
			$('.selected:eq(4)').html(
				"<p>" + $('p:eq(0)',this).html() + "</p><p>" + $('p:eq(1)',this).html() + "</p><p>" + $('p:eq(2)',this).html() + "</p>"
			);
			
			var select_no = $('p:eq(3)', this).html();
			select_all[4] = select_no;
			$("input[name='course']").val(select_all);
		}
		price();
	});
	
	$("#length1").change(function(){
		var number = $(this).val();
		
		if(number == "-"){
			$('.select_length').css('background-image','url(./images/course/select_off.png)');
			$('.select_length p').css('color', '#fff');
			$(this).parent().children('.number_price').html("- 円");
			
			$('.selected:eq(5)').html("");
			$('#length2').prop('disabled', false);
			select_all[5] = 0;
			$("input[name='course']").val(select_all);
		}
		else{
			var number_price = number * 900 + "円";
			$(this).parent().children('.number_price').html(number_price);
			
			$(this).parent().css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$(this).parent().children('p').css('color', '#777');
			
			$('.selected:eq(5)').html(
				"<p>" + $(this).parent().children('p:eq(0)').html() + number + "本</p><p>" + number * 10 + "分</p><p>" + $(this).parent().children('p:eq(2)').html() + "</p>"
			);
			
			var select_no = 600 + parseInt(number);
			select_all[5] = select_no;
			$("input[name='course']").val(select_all);
			$('#length2').prop('disabled', true);
		}
		
		price();
	});
	
	$("#length2").change(function(){
		var number = $(this).val();
		
		if(number == "-"){
			$('.select_length').css('background-image','url(./images/course/select_off.png)');
			$('.select_length p').css('color', '#fff');
			$(this).parent().children('.number_price').html("- 円");
			
			$('.selected:eq(5)').html("");
			$('#length1').prop('disabled', false);
			select_all[5] = 0;
			$("input[name='course']").val(select_all);
		}
		else{
			var number_price = number * 530 + "円";
			$(this).parent().children('.number_price').html(number_price);
			
			$(this).parent().css('background-image', 'url(./images/course/select_on.png)').addClass('on');
			$(this).parent().children('p').css('color', '#777');
			
			if(number == 10){
				var time = 60;
			}
			else{
				var time = number * 5;
			
			}
			
			$('.selected:eq(5)').html(
				"<p>" + $(this).parent().children('p:eq(0)').html() + number + "本</p><p>" + time + "分</p><p>" + $(this).parent().children('p:eq(2)').html() + "</p>"
			);
			
			var select_no = 700 + parseInt(number);
			select_all[5] = select_no;
			$("input[name='course']").val(select_all);
			$('#length1').prop('disabled', true);
		}
		
		price();
	});

});
