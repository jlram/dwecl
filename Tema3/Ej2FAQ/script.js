(function () {
    
    var contenedor = document.getElementById("wrapper");
    var imagen = document.getElementById("imagen");

    contenedor.addEventListener("click", accion);

    function accion(event) {
        event.preventDefault();
        var elemento = event.target;

        switch (elemento.tagName) {
            case 'H1':
                let item = elemento.parentNode.nextElementSibling;
                item.classList.toggle("oculto");

                elemento.style.backgroundImage = "url('menos.jpg')";

                if (item.classList[0] === "oculto"){
                    imagen.classList.add("oculto");
                    elemento.style.backgroundImage = "url('mas.jpg')";    
                }

                break;
            case 'LI':

                imagen.classList.remove("oculto");
                
                /**
                 * Con esto estoy haciendo un array de los hijos del nodo
                 * para sacar en qué posición está el elemento seleccionado.
                 * De esta manera
                 */
                var i = Array.from(elemento.parentNode.children).indexOf(elemento);
                
                if (elemento.parentNode.id === "ply") {
                    imagen.style.backgroundImage = "url(p" + i + ".jpg)";
                } else {
                    imagen.style.backgroundImage = "url(m"+ i + ".jpg)";
                }
                
                break;
        }

    }

})();