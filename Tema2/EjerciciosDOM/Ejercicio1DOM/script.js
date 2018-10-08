/*
* Ejercicio1DOM:
* Utilizando las funciones DOM, mostrar por pantalla la siguiente información:
* 1. Número de enlaces de la página
* 2. Dirección a la que enlaza el penúltimo enlace
* 3. Numero de enlaces que enlazan a http://www.google.es
* 4. Número de enlaces del tercer párrafo
*/

(function () {

    var enlaces = document.getElementsByTagName("a");
    var parrafo = document.getElementById("resul");

    parrafo.innerHTML += "Enlaces: " + enlaces.length + "<br>";

    parrafo.innerHTML += "Penúltimo enlace: " + enlaces[enlaces.length - 2].getAttribute("href")  + "<br>";

    let count = 0;
    for (item of enlaces) {
        if (item.hasAttribute("href") && item.getAttribute("href") == "http://www.google.es") {
            count++;
        }
    }
    parrafo.innerHTML += "Enlaces a http://www.google.es " + count + "<br>";

    var parrafos = document.getElementsByTagName("p");
    
    if (parrafos.length > 2){
        parrafo.innerHTML += "Enlaces del tercer párrafo: " + parrafos[2].getElementsByTagName("a").length + "<br>";
    }
    

})();

