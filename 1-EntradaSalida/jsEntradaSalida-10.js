/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var descuento;
    var resultado;
    
    sueldo= parseInt (document.getElementById("sueldo").value);
    descuento= parseInt (sueldo / 0.25);
    resultado= (descuento - sueldo);	
    alert ("el descuento es de " + resultado);	
}
