
(function() {
    var data = null;

    var solicitud = new XMLHttpRequest();
    solicitud.withCredentials = true;

    solicitud.onload = muestracontenido;

    solicitud.open("GET", "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqbHJhbW9zOTdAZ21haWwuY29tIiwianRpIjoiNzgyY2UxNmMtYTAyNi00OWVjLWFkZmEtZjdlNmE4YjI2MjMzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NDY5MzY4NDMsInVzZXJJZCI6Ijc4MmNlMTZjLWEwMjYtNDllYy1hZGZhLWY3ZTZhOGIyNjIzMyIsInJvbGUiOiIifQ.EGJkktqHpPS7eSiDGhBicIvmo40RkKTQdFqC1FMpYAs");
    solicitud.send(null);

    function muestracontenido() {
        if (solicitud.status == 200) {
            $.getJSON("datos");
            var datos = JSON.parse(solicitud.responseText).datos;
            console.log(solicitud.responseText);
            solicitud.open("GET", datos);
            solicitud.send(null);            
        }
    }

})();