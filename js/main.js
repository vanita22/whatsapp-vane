$(document).ready(function(){
	var uno = $(".uno").val();
	var dos = $(".dos").val();

	if(button = uno){
		$(".contenido").prepend("#img-1");
	}

	/*para que se escriba en pantalla la iteraccion*/
	$("#press").click(function(){
		var entrada = $("#entrada").val();
		$("#cabecera2").prepend("<p>" + entrada + "</p>");
		$("#entrada").val(" ");
	})

	/*$("#press").keypress(function(){
		var entrada = $("#entrada").val();
		if(keypress == 13){
			$(".contenido").prepend(entrada);
		}
	})*/
})