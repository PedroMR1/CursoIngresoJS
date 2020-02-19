function mostrar()
{
	var numeroIngresado;
	var maximo;
	var minimo;
	var flag=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado= prompt ("Ingrese un numero ");
		numeroIngresado= parseInt (numeroIngresado);
		
		while (isNaN(numeroIngresado)){
		numeroIngresado=prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
		numeroIngresado=parseInt(numeroIngresado);
		}
		if (flag==0){
		   maximo= numeroIngresado;
		   minimo= numeroIngresado;
		   flag=1;
		}else if (numeroIngresado>maximo){
			maximo = numeroIngresado;
		}else if (numeroIngresado<minimo){
			minimo = numeroIngresado;
		}

	respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN