/**
 * Pide un número por teclado e indica si es par o impar.
 */
(function() {

    var button = document.getElementById("button");
    var paragraph = document.getElementById("paragraph");

    button.onclick = comprobar;

    function comprobar() {
        var numero = document.getElementById("numero").value;
        var texto = "";

        if(isNaN(numero)) {
            texto = "Por favor, introduce un número";        
        } else if(numero%2 != 0) {
            texto = "El número es impar";
        } else {
            texto = "El número es par";
        }

        paragraph.textContent = texto;
    }

})();