function mostrar()
{
  
var mes = document.getElementById('mes').value;

switch (mes){
    case "Febrero":
        alert ("Este mes no tiene más de 29 días.");
        break;
    
    default:
        alert ("tiene 30 dias o mas!");
        break;                              
}
	
	


}//FIN DE LA FUNCIÓN