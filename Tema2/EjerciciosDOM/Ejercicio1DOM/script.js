/*
* Ejercicio1DOM:
* Utilizando las funciones DOM, mostrar por pantalla la siguiente información:
* 1. Número de enlaces de la página
* 2. Dirección a la que enlaza el penúltimo enlace
* 3. Numero de enlaces que enlazan a http://www.google.es
* 4. Número de enlaces del tercer párrafo
*/

(function () {

    var contenedor = document.getElementById("enlaces");
    var apartado1 = document.getElementById("apartado1");
    var apartado2 = document.getElementById("apartado2");

    cuentaEnlaces();
    penultimoEnlace();

    function cuentaEnlaces() {
        var hijos = contenedor.children;
        apartado1.textContent = "Hay " + hijos.length + " enlaces.";
    }

    function penultimoEnlace() {
        var enlace = contenedor.lastChild.previousSibling.getAttribute("href");
        apartado2.textContent = "El penúltimo enlace es " + enlace;
    }



})();
