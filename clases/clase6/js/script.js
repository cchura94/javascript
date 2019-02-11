
function saludo(n) {
	document.write("Saludos "+n);
}

function suma (a, b) {
	return a+b;
}
function resta (a, b) {
	return a-b;
}
function multiplicacion (a, b) {
	return a*b;
}
function division (a, b) {
	return a/b;
}

saludo("Cristian")
document.write(suma(4, 7))  //11
document.write("<hr>")
document.write(resta(4, 7))
document.write("<hr>")
document.write(multiplicacion(4, 7))
document.write("<hr>")
document.write(division(4, 7))
document.write("<hr>")

//alert(resta(suma(division(multiplicacion(7,8), 28), 4), multiplicacion(7, 2)))

var a =new Array("Hola", "Como", "estas", "hola2")
document.write(a[1])
/*document.write("<hr>")
document.write(a.pop())
document.write("<hr>")
document.write(a.pop())
document.write("<hr>")
document.write(a.pop())
document.write("<hr>")
document.write(a.pop())*/
a.push("Algo")
a.push("Algo2")
a.push("Algo3")
a.push("Algo4")
a.splice(1, 1)
document.write(a)
var json = JSON.parse(a)
document.write(json)


