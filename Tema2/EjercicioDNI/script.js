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
    //Se puede hacer simplemente con una cadena de caracteres, no tenemos que 
    //Crear un array que es más tedioso
    var letrasB = 'TRWAGMYFPDXBNJZSQVHLCKET';

    button.addEventListener('click', comprobar);
    //button.addEventListener('click', comprobar2);
    
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

    //Función alternativa
    function comprobar2() {
        var number = document.getElementById("numero").value;
        var letter = document.getElementById("letra").value;

        var texto = "";
        if(number.length != 8) {
            texto = "La longitud del número tiene que ser 8."
        } else {
            var total = number % 23;
            
            if(letrasB[total] == letter.toUpperCase()) {
                texto = "DNI válido";
            } else {
                texto = "DNI no válido";
            }  
        }
        alert(texto);
    }
})();