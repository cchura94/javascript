
function generar_numero() {
	var num = document.getElementById("numero").value //Obtengo el valor del input
	
	document.write("<link rel='stylesheet' href='./css/estilo.css'>")
	for (var i = 1; i <= num; i++) {
		document.write("<div class='caja'>")
		document.write("<h1>Mi pagina</h1>")
		document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>")
		document.write("<a href=''>Mostrar</a>")
		document.write("</div>")
	};




	/*for (var i = 1;i <= num ;i++) {
		document.write(i+" ")
	};

	var i = 1
	while(i <= num ){
		document.write(i+" ")
		i++;
	}
	alert(num);*/
}
