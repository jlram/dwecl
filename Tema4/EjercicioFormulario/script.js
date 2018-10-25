(function (){
    var formulario = document.getElementById("formulario");
    formulario.addEventListener('submit', checkForm);

    /*Regla cogida de internet para validar email*/
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    function checkForm(event){
        event.preventDefault();
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        
        var texto = "";

        if(nombre.length < 3 || nombre.length > 10) {
            texto += "El nombre tiene que ser mayor de 3 caracteres y menor de 10 caracteres.\n";
        }

        if(apellido.length < 3 || apellido.length > 10) {
            texto += "El apellido tiene que ser mayor de 3 caracteres y menor de 10 caracteres.\n";
        }

        if(!re.test(email)) {
            texto += "Introduce un email válido.\n";
        }

        if(texto == "") {
            formulario.submit();
            alert("Todo correcto"); 
        } else {
            alert(texto);
        }
    }
})(); 