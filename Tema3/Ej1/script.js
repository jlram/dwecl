(function (){

    var lista = document.getElementById("listaCanciones");
    var input = document.getElementById("cancion");
    var canciones = lista.children;

    var boton = document.getElementById("boton");

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
        lista.appendChild(elemento);
    }


})();