(function() {
    var url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqbHJhbW9zOTdAZ21haWwuY29tIiwianRpIjoiNzgyY2UxNmMtYTAyNi00OWVjLWFkZmEtZjdlNmE4YjI2MjMzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NDY5MzY4NDMsInVzZXJJZCI6Ijc4MmNlMTZjLWEwMjYtNDllYy1hZGZhLWY3ZTZhOGIyNjIzMyIsInJvbGUiOiIifQ.EGJkktqHpPS7eSiDGhBicIvmo40RkKTQdFqC1FMpYAs";

    fetch(url)
    .then(response => fetch(response.json())
    .then(response => response.json())
    .then(tiempo => {
        /*
        item.fecha, item.probPrecipitacion[0].value, 
        item.humedadRelativa, item.viento[0].velocidad, item.temperatura,
        item.sensTermica
        */
        for (var item of tiempo) {
            $(".container").append(
                `<tr>
                <th>${item.fecha}</th>
                <th>${item.probPrecipitacion[0].value}</th>
                <th>${item.humedadRelativa}</th>
                <th>${item.viento[0].velocidad}</th>
                <th>${item.temperatura}</th>
                th>${item.sensTermica}</th>
                </tr>`
            );
        }
    })
)})();