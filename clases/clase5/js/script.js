var opcionUsuario = prompt("Ingrese Su Opción")
//alert("Su nombre es: "+opcionUsuario)
var pc = Math.floor((Math.random()*3)) //0 al 2
//alert(pc)
//document.write(opcionUsuario)

//var personas = ["Pepe", "Juan", "Maria", "Ana", "Oscar"];
//document.write(personas[aleatorio-1])

var opciones = ["Piedra", "Papel", "Tijera"];
//document.write(opciones[opcionUsuario-1])
cualquiera()

function cualquiera () {
	if (opciones[pc] == opcionUsuario) {
		document.write("Empate!!!")
	}else{
		if (opciones[pc] == "Piedra" && opcionUsuario == "Papel") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Ganaste!!!")
		};
		if (opciones[pc] == "Piedra" && opcionUsuario == "Tijera") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Perdiste!!!")
		};
		if (opciones[pc] == "Papel" && opcionUsuario == "Piedra") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Perdiste!!!")
		};
		if (opciones[pc] == "Papel" && opcionUsuario == "Tijera") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Ganaste!!!")
		};
		if (opciones[pc] == "Tijera" && opcionUsuario == "Piedra") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Ganaste!!!")
		};
		if (opciones[pc] == "Tijera" && opcionUsuario == "Papel") {
			document.write("pc: "+opciones[pc]+" VS  usuario: "+opcionUsuario+" = "+"Perdiste!!!")
		};
	}
}
