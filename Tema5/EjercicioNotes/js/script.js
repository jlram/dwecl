$(function() {

    var draggable = $("#draggable");

    $( "#draggable" ).draggable({
        stack: ".card"
    });
    /**
     * Hace una copia de la variable draggable copiada al principio,
     * la muestra con un efecto fade in y la convierte en draggable
     */
    $(".btn-success").on("click", function(e) {
        let draggabletemp = draggable.clone().appendTo($("#wrapper")).hide().fadeTo("slow", 1);
        
        $(draggabletemp).children(':first-child').text("");

        draggabletemp.draggable({
            stack: ".card"
        });
    });

    $(document).on("click", ".btn-danger", function() {
        // $(this).closest(".card").remove(); 
        $(this).parent().remove();
    });
});