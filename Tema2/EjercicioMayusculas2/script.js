(function() {
    var button = document.getElementById("button");
    
    var texto;

    button.addEventListener("click", function() {
        for (let i = 0; i < 3; i++) {
            var paragraph = document.getElementById("resul" + (i+1));
            console.log("resul" + (i+1));
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