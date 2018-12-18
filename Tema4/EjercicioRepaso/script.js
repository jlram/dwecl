/*
En c9 https://preview.c9users.io/apsierra/nuevo-ejmplosfaciles/ejercicioViajes.html está el HTML correspondiente a este ejercicio de repaso. Se trata de la página de una agencia de viajes y como verás el HTML usa la misma estructura para cada uno de los viajes (un <div> con clase 'tour' para cada destino. Utilizando el código HTML que se proporciona, debes escribir los ficheros viajes.css y viajes.js  para  hacer que la página se comporte de la siguiente forma:

    Al hacer clic sobre el enlace “Ver fotos” 
    aparecerán todas las fotos (previamente están ocultas), 
    al volver a hacer clic desaparecerán.
    
    Al modificar el campo "número de noches" de cualquier viaje,
    se debe modificar automáticamente el precio 
    (el precio por día está en el span con clase 'tour' correspondiente a ese viaje) .

    Al pulsar el botón de "reserve ahora",
     desaparecerá dicho botón y aparecerá en su lugar el mensaje:
      “Llame al 902 30 30 30 para reservar este viaje”.
*/
(function() {

    var fotos = document.getElementsByClassName("fotos")[0];

    var verMas = document.getElementsByClassName("ver-fotos")[0];
    
    var buttonsReserva = document.getElementsByClassName("book");

    var nochesFrancia = document.getElementById("noches-francia");
    var nochesUSA = document.getElementById("noches-usa");
    var nochesTokio = document.getElementById("noches-tokio");
    
    for (let item of buttonsReserva) {
        item.addEventListener("click", function(e){
            e.target.parentElement.append("LLame al 902 30 30 30 para reservar este viaje");
            e.target.classList.add("hidden");
        });
    }


    
    nochesFrancia.addEventListener("change", function(e) {
        let valorNoche = nochesFrancia.parentElement.getAttribute("data-precio-dia");
        
        nochesFrancia.parentElement.getElementsByClassName("total")[0].textContent 
                                                = valorNoche * nochesFrancia.value;

        nochesFrancia.parentElement.getElementsByClassName("numero-noches")[0].textContent = nochesFrancia.value;
    });

    nochesUSA.addEventListener("change", function(e) {
        let valorNoche = nochesUSA.parentElement.getAttribute("data-precio-dia");
        
        nochesUSA.parentElement.getElementsByClassName("total")[0].textContent 
                                                = valorNoche * nochesUSA.value;

        nochesUSA.parentElement.getElementsByClassName("numero-noches")[0].textContent = nochesUSA.value;
    });

    nochesTokio.addEventListener("change", function(e) {
        let valorNoche = nochesTokio.parentElement.getAttribute("data-precio-dia");
        
        nochesTokio.parentElement.getElementsByClassName("total")[0].textContent 
                                                = valorNoche * nochesTokio.value;

        nochesTokio.parentElement.getElementsByClassName("numero-noches")[0].textContent = nochesTokio.value;
    });

    verMas.addEventListener("click", function(e) {
        e.preventDefault();
        fotos.classList.toggle("hidden");
    });
    

})();
