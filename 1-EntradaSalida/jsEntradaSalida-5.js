/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var edad;
    var nombre;
    var mensaje;
    
    edad= parseInt(document.getElementById("laEdad").value);
    nombre= document.getElementById("elNombre").value;
    mensaje=("Usted se llama " +nombre + " y su edad es "+edad);
    alert(mensaje);
}

