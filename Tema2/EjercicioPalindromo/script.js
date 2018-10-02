/**
 * Comprobar que una frase introducida es palíndromo o no.
 */
(function() {

   var paragraph = document.getElementById("paragraph");
   var button = document.getElementById("button");   
   
   button.onclick = comprobar;
    
    /**
     * Usaremos tres cadenas: 
     * - cadenaoriginal, que contiene el texto del input
     * - cadenaseparada, que es un array de la cadena original sin espacios
     * - cadenareves, que hace uso del metodo reverse para dar la vuelta a cadenaseparada
     * 
     * Una vez hecho esto, con un bucle for comprobaremos si cada uno de los elementos de
     * cadenaseparada y cadenareves son iguales. En caso de serlo, estamos ante un palindromo. 
     */
    function comprobar() {

        var texto = "La frase " + cadenaoriginal + " no es un palíndromo.";

        var cadenaoriginal = document.getElementById("cadena").value;
        var cadenaseparada = cadenaoriginal.replace(/\s/g,'').split(""); // quitar espacios
        var cadenareves = cadenaseparada.slice().reverse();

        var palindromo = true;

        //Ciclo para comprobar caracter a caracter si  counciden las dos cadenas introducidas
        //dándole la vuelta para ver si son un palíndromo
        for (let i = 0; i < cadenaseparada.length && !palindromo; i++) {
            console.log(cadenaseparada[i], cadenareves[i]);
            if(cadenaseparada[i] != cadenareves[i]) {
                palindromo = false;
            }
        }

        if (palindromo) {
            var texto = "La frase " + cadenaoriginal + " es un palíndromo.";
        }

        paragraph.textContent = texto;

    }

})();