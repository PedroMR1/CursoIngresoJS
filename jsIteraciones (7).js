function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	numeroIngresado;
	promedio;
	
	while (respuesta == "si") {
		
	}
	numeroIngresado= prompt ("Ingrese un numero ");
	numeroIngresado= parseInt (numeroIngresado);
	//validar que el dato este correcto.
	while (isNaN(numeroIngresado)){
	numeroIngresado=prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
	numeroIngresado=parseInt(numeroIngresado);
	}
	//En esta parte del codigo, sabemos que el numero es correcto.
	contador++;
	acumulador=acumulador + numeroIngresado;
	console.log("El contador es: "+contador);
	console.log("Se encuentra acumulando: "+ acumulador);
