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

    var respuestas = new Array("", "1985", "Brendan Eich", "fatal", "2", "2", "","todas",  "1", "3", "3");

    console.log(respuestas);
    var correcto = true;
    var contadorFallos = 0;
    var contadorIntentos = 0;

    var form = document.getElementById("form");
    var botonEnviar = document.getElementById("botonEnviar");
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

        contador.innerHTML = "Contador: " + minutes + ":" + seconds + 
                               "<br>Número de intentos: " + contadorIntentos + 
                               "<br>Errores: " + contadorFallos;

    }, 1000);
    

    form.addEventListener("submit", function(event) {
        
        contadorFallos = 0;
        event.preventDefault();

        for (let i = 1; i < respuestas.length; i++) {
            var pregunta = document.getElementsByName("p" + i);

            switch(pregunta[0].type) {
            
                case "text" :

                if(pregunta[0].value !== respuestas[i]) {
                    correcto = false;
                    console.log("la pregunta " + i + " está mal");
                    contadorFallos++;
                }

                break;
                
                case "radio" :
                
                var respondida = false;

                for (item of pregunta) {
                    if (item.checked) {
                        respondida = true;
                        if(item.value !== respuestas[i]) {
                            correcto = false;
                            console.log("la pregunta " + i + " está mal");
                            contadorFallos++;
                        }
                    }
                }

                if (!respondida) {
                    correcto = false;
                    console.log("la pregunta" + i + " no está respondida");
                    contadorFallos++;
                }

                break;

                default:
                if (pregunta[0].tagName === "OPTION") {
                    var respondida = false;

                    for (item of pregunta) {
                        if (item.selected) {
                            respondida = true;
                            if(item.value !== respuestas[i]) {
                                correcto = false;
                                console.log("la pregunta " + i + " está mal");
                                contadorFallos++;
                            }
                        }
                    }

                    if (!respondida) {
                        correcto = false;
                        console.log("la pregunta" + i + " no está respondida");
                        contadorFallos++;
                    }
                }

                break;

            }
        }

        alert("Errores: " + contadorFallos);

        if (contadorFallos === 0) {
            clearInterval(x);
            botonEnviar.disabled = true;
        } else {
            contadorIntentos++;
            botonEnviar.value = "Reintentar";
        }
    });

})();