$( function() {
    $( "#draggable" ).draggable({
            stack: ".card"
        }
    );

    var button = document.getElementById("button");

    button.addEventListener("click", function() {

        var draggable = $("#draggable");

        let draggabletemp = draggable.clone().appendTo($("#wrapper:first"));
    
        draggabletemp.draggable({
                stack: ".card"
            }
        );
    });
});