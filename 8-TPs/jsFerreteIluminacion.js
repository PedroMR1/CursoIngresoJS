/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio ()
//A// 
{
var lamparitasBajoConsumo;
var precioFinal=35;
var precioConDescuento;
var precio2;
var resultado;
var marcasLamparas;
var marcasLamparas2;
var argentinaLuz;
var felipeLamparas;
var osram;
var jeluz;
var hazIluminacion;
marcasLamparas = argentinaLuz, felipeLamparas, osram, jeluz, hazIluminacion;
marcasLamparas2= felipeLamparas, osram, jeluz, hazIluminacion;
lamparitasBajoConsumo = parseInt(document.getElementById("Cantidad").value);
console.log(lamparitasBajoConsumo);
if(lamparitasBajoConsumo>=6) {
    precio2 = lamparitasBajoConsumo * precioFinal;
    precioConDescuento = precio2 * 50 / 100;
    resultado = precioConDescuento;
    document.getElementById("precioDescuento").value=resultado;
    alert(resultado);
}
//B//
 /*else if (argentinaLuz==5 )
 { precio3=lamparitasBajoConsumo*precioFinal;
   precioConDescuento= precio3 * 40 / 100;
   resultado = precioConDescuento; 
   document.getElementById("precioDescuento").value=resultado;
   alert(resultado);

 }
else if (lamparitasBajoConsumo ==5 || lamparitasBajoConsumo == marcasLamparas2)
 { precio3=lamparitasBajoConsumo*precioFinal;
   precioConDescuento=precio3 * 30 / 100;
   resultado= precioConDescuento;
   document.getElementById("precioDescuento").value=resultado;
   alert(resultado);
 
}*/
else if(lamparitasBajoConsumo == argentinaLuz || lamparitasBajoConsumo == 5){
    precio2 = lamparitasBajoConsumo * precioFinal;
    precioConDescuento = precio2 * 40 / 100;
    resultado = precioConDescuento;
    document.getElementById("precioDescuento").value=resultado;
}
}