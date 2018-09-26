/**
 * Sacar la letra del DNI en función de los numeros introducidos
 */
(function() {
    var button = document.getElementById("button");
    var paragraph = document.getElementById("parrafo");

    var letras = ['T', 'R', 'W', 'A', 'G',
                 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
                 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
                 'E', 'T'];

    button.onclick = comprobar;
    
    function comprobar() {
        var number = document.getElementById("numero").value;
        var letter = document.getElementById("letra").value;

        var texto = "";
        if(number.length != 8) {
            texto = "La longitud del número tiene que ser 8."
        } else {
            var total = number % 23;
            
            if(letras[total] == letter.toUpperCase()) {
                texto = "DNI válido";
            } else {
                texto = "DNI no válido";
            }  
        }
        paragraph.textContent = texto;
    }
})();