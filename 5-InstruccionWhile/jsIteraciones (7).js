
//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.//

function mostrar()
{
var numeroIngresado;
var contador=0;
var acumulador=0;
var respuesta='si';
while(respuesta == "si"){
numeroIngresado = prompt("Ingrese un numero ");
numeroIngresado = parseInt(numeroIngresado);

while (isNaN(numeroIngresado)) {
numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
numeroIngresado = parseInt(numeroIngresado);
}

contador++; 
acumulador = acumulador + numeroIngresado;
respuesta = prompt("Desea continuar: escriba si para continuar");
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}

	 

//FIN DE LA FUNCIÓN
