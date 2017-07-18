$(document).ready(function(){
	
	/*para que se escriba en pantalla la iteraccion*/
	$("#press").click(function(){
		var entrada = $("#entrada").val();
		$(".contenido").prepend("<p>" + entrada + "</p>");
		$("#entrada").val(" ");
	})

	/*$("#press").keypress(function(){
		var entrada = $("#entrada").val();
		if(keypress == 13){
			$(".contenido").prepend(entrada);
		}
	})*/
})