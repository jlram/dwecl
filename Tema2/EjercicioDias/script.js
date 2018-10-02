/**
 * Crear un documento con dos botones y un párrafo.
 * En el primer botón obtendremos qué dia es hoy.
 * En el segundo, sabremos si es fin de semana o no.
 * Ambos resultados se mostrarán en el párrafo del HTML.
 */
(function() {

    var button = document.getElementById("button");
    var button2 = document.getElementById("button2");
    var demo = document.getElementById("demo");

    //Agregamos los eventos
    button.addEventListener("click", dia2);
    button2.addEventListener("click", finde);  
    
    var texto;
    
    var opciones = "Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado".split(",");

    /**
     * Esta función se lanzará al pulsar el primer botón
     * de nuestra web. Obtendrá el día de la semana y 
     * se mostrará en pantalla.
     */
    // function dia() {
        
    //     // Genera un número en función del día que sea
    //     var day = new Date().getDay();

    //     switch (day) {
    //         case 0:
    //             texto = "Hoy es Domingo";       
    //             break;
    //         case 1:
    //             texto = "Hoy es Lunes"; 
    //             break;
    //         case 2:
    //             texto = "Hoy es Martes";    
    //             break;           
    //         case 3:
    //             texto = "Hoy es Miércoles";
    //             break;
    //         case 4:
    //             texto = "Hoy es Jueves"; 
    //             break;
    //         case 5:
    //             texto = "Hoy es Viernes"; 
    //             break;
    //         case 6:
    //             texto = "Hoy es Sábado"; 
    //             break;
    //         default:
    //             texto = "Ha ocurrido un error"; 
    //             break;
    //     }
    //     // Muestra el contenido de texto en el HTML
    //     demo.textContent = texto;
    // }

    /**
     * Otra forma de realizar la comprobación de los días sin tener que 
     * utilizar un switch
     */
    function dia2() {
        
        // Genera un número en función del día que sea
        var day = new Date().getDay();

        if (day >= 0 && day < 7){
            texto = "Hoy es " + opciones[day];
        }else{
            texto =  "Ha ocurrido un error";
        }
        // Muestra el contenido de texto en el HTML
        demo.textContent = texto;
    }

    /**
     * Primero, comprobamos que la variable day ha sido ya declarada.
     * En caso de que no, volveremos a consultar el día de la semana.
     * Una vez hecho esto, 
     */
    function finde() {
        if(day == null) {
            var day = new Date().getDay();
        }

        if (day == 6 || day == 0) {
            texto = "Feliz fin de semana"
        } else if (day < 5) {
            texto = "Estamos entre semana. A trabajar";
        } else if (day == 5) {
            texto = "Es viernes, ya casi estamos";
        } else {
            texto = "Ha ocurrido un error"
        }

        demo.textContent = texto;
    }

})();