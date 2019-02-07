(function (){

    var respuestaCheck = "";

    var botonLimpia = $("<button>", {
        text: "Borrar",
        class: 'botonLimpia'
    });

    /**
     * Llamada de AJAX a nuestro fichero JSON. Sólo se recargará nuestra lista en caso
     * de que se haya modificado algo en el fichero JSON.
     */
    function cargar() {
        var peticion = $.ajax({
            url: "./cancion.json",
            type: "get",
            dataType: "json",
        });
        
        peticion.done(function (respuesta) {
        
            if(JSON.stringify(respuesta) !== JSON.stringify(respuestaCheck)) {
                respuestaCheck = respuesta;

                $("#listaCanciones").empty();

                $.each(respuesta, function(indice, cancion) {
                    var li = $("<li>", {
                        text: cancion.nombre,
                        class: 'cancion'
                    });

                    $("#listaCanciones").append(li);     
                });

                $(".cancion").append(botonLimpia);
            }
        })
    }


    /**
     * Método para hacer una llamada de AJAX cada 3 segundos
     */
    setInterval(cargar, 3000);

    /**
     * Evento del botón de borrar para eliminar la canción 
     */
    $(document).on('click', '.botonLimpia', function() {
        $(this).parent().remove();
    });


     
})();