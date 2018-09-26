/**
 * Pide una cadena por teclado e indica si está formada por 
 * mayúsculas, minúsculas o ambas.
 */

(function() {
    var button = document.getElementById("button");
    var paragraph = document.getElementById("paragraph");
    
    var texto;

    button.onclick = comprobar;

    function comprobar() {
        var cadenaoriginal = document.getElementById("cadena").value;
        var cadenamayus = cadenaoriginal.toUpperCase();
        var cadenaminus = cadenaoriginal.toLowerCase();
    
        if (cadenaoriginal.trim() == "") {
            texto = "La cadena está vacía";
        } else if (cadenaoriginal == cadenamayus) {
            texto = "La cadena está compuesta solo por mayúsculas";
        } else if (cadenaoriginal == cadenaminus) {
            texto = "La cadena está compuesta solo por minúsculas";
        } else {
            texto = "La cadena está compuesta por minúsculas y mayúsculas";
        }

        paragraph.textContent = texto;
    }
})();