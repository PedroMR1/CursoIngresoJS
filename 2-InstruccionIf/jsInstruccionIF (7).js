function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad=parseInt(document.getElementById("edad").value);

if (!(edad>18) && (estadoCivil="Soltero")) {
    alert("Usted es muy pequeño para NO ser soltero");
}
	


}//FIN DE LA FUNCIÓN