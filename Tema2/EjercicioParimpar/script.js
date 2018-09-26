/**
 * Pide un número por teclado e indica si es par o impar.
 */
(function() {

    var numero = prompt("Por favor, introduce un número.");
    
    if(numero%2 != 0) {
        alert("El número es impar");
    } else {
        alert("El número es par");
    }

})();