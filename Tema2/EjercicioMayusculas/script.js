/**
 * Pide una cadena por teclado e indica si está formada por 
 * mayúsculas, minúsculas o ambas.
 */
(function() {
    var button = document.getElementById("button");
    var paragraph = document.getElementById("paragraph");
    
    var texto;
    /**
     * Manera de conseguir que podamos copiar y pegar la funcion comprobar()
     * y usarla en otros sitios.
     * 
     * Hacemos una funcion que llame a comprobrar():
     * - Metemos un parametro que es igual al valor del campo de texto
     * - Al parrafo le asignamos el texto de lo que devuelva la funcion comprobar()
     */
    button.addEventListener("click", function() {
        paragraph.textContent = comprobar(document.getElementById("cadena").value);
    });

    /**
     * Coge una cadena, la pasa a minuscula y mayuscula y compara
     * para saber si cadenaoriginal está compuesta de mayusculas, 
     * minusculas o ambas.
     * @param cadenaoriginal 
     * @returns texto
     */
    function comprobar(cadenaoriginal) {

        var esNumero = false;
        
        var cadenamayus = cadenaoriginal.toUpperCase();
        var cadenaminus = cadenaoriginal.toLowerCase();

        //Ten cuidado con isNaN, puede darte error en las cadenas vacías
        if (!isNaN(cadenaoriginal)) {
            esNumero = true;
        }

        if (esNumero === true) {
            texto = "Introduce una cadena sin números";
        } else {
            if (cadenaoriginal.trim() == "") {
                texto = "La cadena está vacía";
            } else if (cadenaoriginal == cadenamayus) {
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