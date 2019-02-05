//Estructuras de control Switch
let dia = 3;
switch(dia){
	case 1:
		document.write("Lunes");
	break;		
	case 2:
		document.write("Martes");
	break;
	case 3:
		document.write("Miercoles");
	break;
	case 4:
		document.write("Jueves");
	break;
	case 5:
		document.write("Viernes");
	break;
	case 6:
		document.write("Sabado");
	break;
	case 7:
		document.write("Domingo");
	break;
}
document.write("<hr>");
//Bucles
for (var i = 0; i < 5; i++) {
	document.write(i);
};
document.write("<hr>");
var j = 0;
var n = 16;
while(j < n){
	if (j == n-1) {
		document.write(j);
	}else{
		document.write(j+",");
	}	
	j++;
}
document.write("<hr>");
//0,1,1,2,3,5,8,13,21,34,55,89
var a, b, c;
a = 0;
b = 1;
c = 0;
var x=15;
while(b <= x){
	document.write(c+" ");
	a = b;
	b = c;
	c = a+b;
}

document.write("<hr>");
a = 0;
b = 1;
c = 0;
do{
	document.write(c+" ");
	a = b;
	b = c;
	c = a+b;
}while(b <= x)

document.write("<table border='1'>");
document.write("<thead>");
document.write("<td>Producto</td>");
document.write("<td>Fecha Ven.</td>");
document.write("</thead>");
document.write("<tbody>");
for (var i = 1; i <= 10; i++) {
	document.write("<tr>");
	document.write("<td>");
	document.write("producto"+i);
	document.write("</td>");
	document.write("<td>");
	document.write(Date());
	document.write("</td>");
	document.write("</tr>");
};
document.write("</tbody>");
document.write("</table>");







