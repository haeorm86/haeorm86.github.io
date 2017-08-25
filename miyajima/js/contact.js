$(function(){
	$("#send").on("click", function(){
		var check = true;
		for(i = 0; i < 6; i++){
			if(!$(".check").eq(i).val()){
				check = false;
			}
		}
		
		if(check == false){
			$("#check_alert").show("fade", 500);
			return false;
		}
		
		if(!confirm('送信しますか？')){
			return false;
		}
		else{
			$.ajax({
				type: "POST",
				url: "lib/contact.php",
				data: $("#contact_form").serialize(),
				success: function(html)	{
					var response = html;
					$("#flip").flip({
						direction: 'lr',
						color: '#fff',
						speed: 400,
						content: response
					});
				}
			});
		}
	});
});