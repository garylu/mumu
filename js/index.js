$(function(){

 
   // 样式选择、颜文字选择
	$("#chat-box-input").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
	});
	$("#color-btn").click(function(){
		if ($('#keyboard-face').is(':visible')) {
			$('#keyboard-face').hide();
		}
		$("#keyboard-color").fadeToggle("fast");
	});
	$("#face-btn").click(function(){
		if ($('#keyboard-color').is(':visible')) {
			$('#keyboard-color').hide();
		}
		$("#keyboard-face").fadeToggle("fast");
	});



	$("#keyboard-face span").click(function(){
		var text = $(this).text();
		var chatInput = $("#chat-box-input").val();
		console.log(chatInput);
		$("#chat-box-input").val(chatInput+text);
	})







})