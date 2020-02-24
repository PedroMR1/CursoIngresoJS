/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numUno;
var numDos;
var resultado;

numUno=parseInt (document.getElementById("numeroUno").value);
numDos=parseInt (document.getElementById("numeroDos").value);
resultado= (numUno + numDos);
alert("La suma es de " + resultado);
}

function restar()
{
var numUno;
var numDos;
var resultado;
    
numUno=parseInt (document.getElementById("numeroUno").value);
numDos=parseInt (document.getElementById("numeroDos").value);
resultado= (numUno - numDos);
alert("La resta es de " + resultado);	
}

function multiplicar()
{ 
var numUno;
var numDos;
var resultado;
    
numUno=parseInt (document.getElementById("numeroUno").value);
numDos=parseInt (document.getElementById("numeroDos").value);
resultado= (numUno * numDos);
alert("La multiplicacion es de " + resultado);	
}

function dividir()
{
var numUno;
var numDos;
var resultado;
    
numUno=parseInt (document.getElementById("numeroUno").value);
numDos=parseInt (document.getElementById("numeroDos").value);
resultado= (numUno / numDos);
alert("La division es de " + resultado);	
}

