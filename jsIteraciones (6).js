function mostrar()
{
var numeroIngresado;
var contador=0;
var acumulador=0;
var promedio;

do{
//ingresar el numero.
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
}

while (contador<5);

//muestra el acumulador
document.getElementById('suma').value=acumulador;
promedio=acumulador/contador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN