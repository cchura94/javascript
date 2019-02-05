document.write("<h2>Operadores aritmeticos</h2>");
document.write("<br> Potencia <hr>")
document.write(3**2)
document.write("<br> modulo <hr>")
document.write(20%3)
document.write("<br> Incremento ++ <hr>")
var a = 5;
a++;
document.write(a)
document.write("<br> Decremento -- <hr>")
a--;
a--;
a--;
document.write(a)
var x = 6;
var y = 3;
var z = 0;

document.write("<br> Operadores de asignacion <hr>")
//x = y;
document.write(x);
document.write("<br>")
x += y // x = x + y
document.write(x);
document.write("<br>")
x -= y // x = x - y
document.write(x);
document.write("<br>")
x *= y // x = x * y
document.write(x);
document.write("<br>")
x /= y // x = x / y
document.write(x);
document.write("<br> Operadores de comparación <hr>")
console.log(5==5)
x = 4
y = 3
document.write(x == y) //false
document.write("<br>")
document.write(x === y) //false
document.write("<br>")
document.write(x != y) //true
document.write("<br>")
document.write(x > y) //true
document.write("<br>")
document.write(x < y) //false
document.write("<br>")
document.write(x >= y) //true
document.write("<br>")
document.write(x <= y) //false

document.write("<br> Operadores Lógicos <hr>")
document.write("<br>")
document.write(5==5 && 3==3) //true
document.write("<br>")
document.write(x > y && x < y) //false

document.write("<br>")
document.write(x < y && x >= y) //false
document.write("<br>")
document.write(x < y && x < y) //false
//Operadores OR

document.write("<br>")
document.write(5==5 || 3==3) //true
document.write("<br>")
document.write(x > y || x < y) //true

document.write("<br>")
document.write(x < y || x >= y) //true
document.write("<br>")
document.write(x < y || x < y) //false

//operador NOT
document.write("<br>")
document.write(!(5==5 || 3==3)) //false
document.write("<br>")
document.write(!(x > y || x < y)) //false

document.write("<br>")
document.write(!(x < y || x >= y)) //false
document.write("<br>")
document.write(!(x < y || x < y)) //true

// IF (Condicional)
if (5 == 6) {
	document.write("Si");
}else{
	document.write("No no lo es");
}

var lluvia = false;

if (lluvia) {
	document.write("Esta lloviendo");
}else{
	document.write("No esta lloviendo");
}

a=8
var b=5
var c=38

if (a > b) {
	if (a > c) {
		document.write("A es mayor");
	}	
}else if (b > c ){
	if (b > a) {
		document.write("B es mayor");
	}else{
		document.write("C es mayor");
	}
	
}else{
	document.write("C es mayor");
}










