function mostrar()
{
do {
var sexo=prompt ("ingrese f ó m .");
sexo.toLocaleLowerCase
//while (sexo != 'f' || 'm') {

while (!(sexo == "f" || sexo == "m" )){
	var sexo= prompt ("ingrese f ó m .");

}	
switch (sexo) {
	case "f":
		sexo = "Femenino";
		break;
	case "m":
	    sexo = "Masculino";
		break;

}
document.getElementById("Sexo").value=sexo;
}