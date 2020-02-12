function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom;
numeroRandom=Math.floor(Math.random() * 11);

	if (numeroRandom==10||numeroRandom==9){
	
		alert ("La nota es EXCELENTE ");
	} else if(numeroRandom>4) {
		
		alert ("Usted APROBO ");
	} else { 
		
		alert ("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN