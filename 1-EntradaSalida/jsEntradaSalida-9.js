/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var aumento;
var resultado;

sueldo= parseInt (document.getElementById("sueldo").value);
aumento=parseInt (sueldo * 0.10);
resultado= (aumento + sueldo);	
alert ("el aumento es de " + resultado);
}
