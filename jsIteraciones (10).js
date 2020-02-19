function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumuladorpositivos=0;
	var acumuladornegativos=0;
	var numeroIngresado;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaNegativosPositivos;
	var respuesta="si";

	while(respuesta!="no")
	{
	numeroIngresado= prompt ("Ingrese un numero ");
	numeroIngresado= parseInt (numeroIngresado);
	
	while (isNaN(numeroIngresado)){
	numeroIngresado=prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
	numeroIngresado=parseInt(numeroIngresado);
	}
	if (numeroIngresado>0){
		acumuladorpositivos=acumuladorpositivos + numeroIngresado;
	cantidadPositivos++;
	var resto= numeroIngresado % 2;
	if (resto == 0){
		cantidadNumerosPares++;
	}
	}else if (numeroIngresado<0){
		acumuladornegativos= acumuladornegativos+numeroIngresado;
		cantidadNegativos++;
	}else {
		cantidadCeros++;
	}

contador++;
respuesta=prompt("Desea continuar? si desea cancerlar escriba no");
}
promedioNegativos=acumuladornegativos/cantidadNegativos;
promedioPositivos=acumuladorpositivos/cantidadPositivos;
diferenciaNegativosPositivos=promedioPositivos-promedioNegativos;

document.write("El total de numeros positivos es de : "+acumuladorpositivos+"<br>"+
			   "El total de numeros negativos es de : "+acumuladornegativos+"<br>"+
			   "El promedio de numeros negativos es de: "+acumuladornegativos+"<br>"+
			   "El promedio de numeros positivos es de: "+acumuladorpositivos+"<br>"+
				"La cantidad de ceros es de: "+cantidadCeros+"<br>"+
			     "La diferencia de promedios de numeros negativos y positivos: "+diferenciaNegativosPositivos+"<br>");
}