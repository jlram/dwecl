(function (){

    var lista = document.getElementById("listaCanciones");
    var input = document.getElementById("cancion");

    var textoBusca = document.getElementById("textoBusca");
    var botonBusca = document.getElementById("botonBusca");
    var botonLimpia = document.getElementById("botonLimpia");

    botonLimpia.style.display = "none";

    var canciones = lista.children;

    var boton = document.getElementById("boton");

    botonBusca.addEventListener("click", function() {
        if(textoBusca.value.trim() == "") {
            alert("Introduce un valor válido");
        } else {
            var nodos = lista.childNodes;
            for (const item of nodos) {
                if(item.tagName == "LI") {
                    if (item.firstChild.textContent != textoBusca.value) {
                        item.style.display = "none";
                    }
                }
            }
            botonLimpia.style.display = "inline";
        }
    });

    botonLimpia.addEventListener("click", function() {
        var nodos = lista.childNodes;
        for (const item of nodos) {
            if(item.tagName == "LI") {
                item.style.display = "list-item";
            }

        }

        textoBusca.textContent = "";
        botonLimpia.style.display = "none";
    });

    boton.addEventListener('click', function(){
        
        if (input.value.trim() == ""){
            alert("Inserte una canción para poder añadirla.");
        } else{
            var existe = false;
            for (let item of canciones){
                if (item.textContent=== input.value){
                    var existe = true;
                }
            }

            if(existe) {
               alert("Esa canción ya existe");     
            } else {
                añadeCancion(input.value, lista);
            }  
        }
    });
    
    function añadeCancion(nombreCancion, lista){
        var elemento = document.createElement("li");
        elemento.textContent = nombreCancion;
        var button = document.createElement('button');
        lista.appendChild(elemento);
        elemento.appendChild(button);
        button.textContent = "borrar";
    }

    lista.addEventListener("click", function(e){
        if(e.target.tagName == "BUTTON") {
            e.target.parentNode.remove();
        }
    }); 
})();