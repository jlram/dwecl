/**
 * Comprobar que una frase introducida es palíndromo o no.
 */
(function() {

   var paragraph = document.getElementById("paragraph");
   var button = document.getElementById("button");   

   button.addEventListener("click", function () {
       paragraph.textContent = comprobar(document.getElementById("cadena").value);
   });
    
    /**
     * Usaremos tres cadenas: 
     * - cadenaoriginal, que contiene el texto del input
     * - cadenasinespacios, elimina todos los espacios de la cadena original
     * - cadenareves, que hace uso del metodo reverse para dar la vuelta a cadenaseparada
     *   y join para volver a crear un string.
     * 
     * Una vez hecho esto, comprobaremos si cadenasinespacios y cadenareves son iguales.
     *  En caso de serlo, estamos ante un palindromo. 
     */
    function comprobar(cadenaoriginal) {
  
        var cadenasinespacios = cadenaoriginal.toLowerCase().replace(/\s/g,'');
        var cadenareves = cadenasinespacios.split("").reverse().join("");

        var texto = cadenasinespacios == cadenareves ? 
        "La frase " + cadenaoriginal + " es un palíndromo." :
        "La frase " + cadenaoriginal + " no es un palíndromo.";

        return texto;
    }

})();