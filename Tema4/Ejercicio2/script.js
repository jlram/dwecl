/*
Realiza una una página web que presente un test de preguntas sobre el lenguaje JavaScript.
· Debe contener al menos 10 preguntas y se deben utilizar los siguientes tipos de elementos de formulario:
· Más de una respuesta: (varios checkbox)
· Una sola respuesta de entre varias.
· Una respuesta a elegir de una lista
· Una respuesta para insertar en un campo de texto.
· Una respuesta que sea un comentario que no será evaluable. El comentario contendrá un máximo de 100 caracteres y 
    debe indicarse en todo momento el número de caracteres que quedan para alcanzar el límite.
· La página mostrará un botón "Borrar respuestas" y otro "Corrección".
· El botón Corrección hará que se muestre el número de preguntas contestadas, el porcentaje de aciertos, 
    el número de aciertos, el número de fallos y el número de preguntas no contestadas, así como el tiempo invertido.
· Tras el primer intento, el botón "Corrección" se convertirá en "Reintentar".
· Cuando se hayan acertado todas las preguntas (100% de aciertos) el botón de Corrección se deshabilitará
*/
(function (){

    var respuestas = new Array("", "1985", "Brendan Eich", "fatal", "3", "2", "","",  "1", "3", "3");

    console.log(respuestas);
    var correcto = true;
    var contadorFallos = 0;

    var form = document.getElementById("form");
    var contador = document.getElementById("contador");

    var tiempoInicio = new Date().getTime();

    var x = setInterval(function (){
        var now = new Date().getTime();
        
        var distance = now - tiempoInicio;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0"  + seconds;
        }

        contador.textContent = "Contador: " + minutes + ":" + seconds;

    }, 1000);
    

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        for (let i = 1; i < respuestas.length; i++) {
            var pregunta = document.getElementsByName("p" + i);
            if(pregunta[0].value !== respuestas[i]) {
                correcto = false;
                console.log("la pregunta " + i + "está mal");
                contadorFallos++;
            }
            
            // console.log(pregunta);
        }

        alert("Errores: " + contadorFallos);
        contadorFallos = 0;
    });

})();