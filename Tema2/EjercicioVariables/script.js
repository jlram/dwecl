(function() {
/**
 * Prueba de variables, asignación y
 * muestra del valor por pantalla
 */
    var nombre;
    console.info(nombre);
    nombre = "Ana";

    if (nombre){
    let nombre = "Maria";
    console.info(nombre); // María
    }

    funcionVariables();

    function funcionVariables() {
        var miVariable = 58;

        for (let i = 0; i < 3; i++) {
            miVariable += miVariable;
            console.info(miVariable, i); // 116 0
                                        // 232 1  
                                        // 464 2          
        }
        
    //console.log(i); // No definido
        console.log(miVariable); // 464
    }

    //console.log(miVariable); // No definido
    //console.log(i); // No definido
    console.info(nombre);  // Ana


    if (typeof nombre == "number") {
        console.log("La variable nombre es un numero");
    } else if(typeof nombre == "string") {
        console.log("La variable nombre es un string");
    } else {
        console.log("La variable nombre no es ni numero ni string");
    }
})();