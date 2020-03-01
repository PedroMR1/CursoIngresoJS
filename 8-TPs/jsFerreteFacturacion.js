/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precioUno;
var precioDos;
var precioTres;
var resultado;
var suma;


precioUno=parseInt(document.getElementById("PrecioUno").value);
precioDos=parseInt(document.getElementById("PrecioDos").value);
precioTres=parseInt(document.getElementById("PrecioTres").value);
suma = precioUno + precioDos + precioTres;
resultado = suma;
alert(resultado);
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var suma;
    var promedio;
    
    
    precioUno=parseInt(document.getElementById("PrecioUno").value);
    precioDos=parseInt(document.getElementById("PrecioDos").value);
    precioTres=parseInt(document.getElementById("PrecioTres").value);
    suma = precioUno + precioDos + precioTres;
    promedio = suma/3;
    resultado = promedio;
    alert(resultado);


    }


	

function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var suma;
    var precio1;
    var precio2;
    var precioFinal;
    
    precioUno=parseInt(document.getElementById("PrecioUno").value);
    precioDos=parseInt(document.getElementById("PrecioDos").value);
    precioTres=parseInt(document.getElementById("PrecioTres").value);
    suma = precioUno + precioDos + precioTres;
    precio1 = suma*21;
    precio2 = precio1/100;
    precioFinal = suma + precio2;


    resultado = precioFinal;
    alert(resultado);	
}

