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

                break;
            case 'LI':
                var i = Array.from(elemento.parentNode.children).indexOf(elemento);
                
                if (elemento.parentNode.id === "ply") {
                    imagen.style.backgroundImage = "url(p" + i + ".jpg)";
                    console.log(i);
                } else {

                }
                
                break;
        }

    }

})();