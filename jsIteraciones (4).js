function mostrar()
{
var numero;
numero=parseInt(prompt(document.getElementById("Ingrese numero entre el 0 y el 9");
while (numero<=0 || numero>=9 || isNaN (numero)) {
	numero= prompt ("Error reingrese numero");
}
parseInt(document.getElementById("Numero").value)=numero;
}