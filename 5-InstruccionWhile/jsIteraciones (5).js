function mostrar()
{
var femenino = "f";
var masculino = "m"; 
var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while ( sexo == "f" ||sexo == "m")  {
   if (sexo == "f"){
       alert ("sos mujer");
       

   }
else {
    alert("sos hombre");
    

    }    
}

}//FIN DE LA FUNCIÓN