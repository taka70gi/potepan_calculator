$(document).ready(function(){
	//ACボタン
	$("#AC").click(function(){
		let text_Edit = document.getElementById('text_layout');
		text_Edit.value = "0";
	});
	
	//=ボタン
	$("#equal").click(function(){
		let text_Edit = document.getElementById('text_layout');
		let text_Cal = eval(text_Edit.value);
		text_Edit.value = text_Cal;
	});
});