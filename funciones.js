//Mensaje de Bienvenida.
function Mostrar() {
    var miDiv = document.getElementById("bienvendio");
    alert(miDiv.style.borderColor);
    if (miDiv.style.display==="none"){
        //Muestra la etiqueta div
        miDiv.style.display= "block";

    }
    else {
        //Oculto la etiqueta div
        miDiv.style.display="none"
    }
}