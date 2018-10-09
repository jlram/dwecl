(function() {
    var boton = document.getElementById("BotonAñadir");
    var texto = document.getElementById("CancionTextInput").value;

    boton.addEventListener("click", manejadorClicBoton);
    
    function manejadorClicBoton() {
        alert("El botón ha sido pulsado");
    }
})();