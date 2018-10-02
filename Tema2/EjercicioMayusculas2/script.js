(function() {
    var button = document.getElementById("button");
    
    var texto;

    /**
     * Recoge todos los campos de entrada y se procesan para ver si 
     * la cadena introducida por el usuario está compuesta por mayúsculas, 
     * minúsculas, vacía o por sólamente números.
     * Depende del resultado lo mostramos en un span para dar un feddback al usuario.
     */
    button.addEventListener("click", function() {
        for (let i = 0; i < 3; i++) {
            var paragraph = document.getElementById("resul" + (i+1));
            paragraph.textContent = comprobar(document.getElementById("input" + (i+1)).value);
        }
        
    });

    function comprobar(cadenaoriginal) {

        var esNumero = false;
        
        var cadenamayus = cadenaoriginal.toUpperCase();
        var cadenaminus = cadenaoriginal.toLowerCase();

        if (!isNaN(cadenaoriginal)) {
            esNumero = true;
        }

        if (cadenaoriginal.trim() == "") {
            texto = "La cadena está vacía";  
        } else if (esNumero === true) {
            texto = "La cadena está compuesta por números";
        } else {
            if (cadenaoriginal == cadenamayus) {
                texto = "La cadena está compuesta solo por mayúsculas";
            } else if (cadenaoriginal == cadenaminus) {
                texto = "La cadena está compuesta solo por minúsculas";
            } else {
                texto = "La cadena está compuesta por minúsculas y mayúsculas";
            }
        }
        return texto;
    }
})();