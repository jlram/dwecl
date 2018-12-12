$(function() {

    $("form").submit(function(e){
        e.preventDefault();

        if(!isValidName()) {
            $("input:text").attr("placeholder", "Introduce tu nombre. Este campo no puede estar vacío.");
        }

        if(!isSecurePassword()) {
            $("input:password").val("").attr("placeholder", "Introduce tu contraseña. Debe contener al menos 8 caracteres.");
        }

        if(!isValidEmail()) {
            $("#inputEmail").attr("placeholder", "Introduce tu email. Debe tener un formato válido.");
        }

        if(!isValidTelephone()) {
            $("#inputTel").attr("placeholder", "Introduce tu teléfono. Debe ser de 9 dígitos.");
        }

    });

    function isValidName() {
        return $('input:text').val().length === 0 ? false : true;
    }

    function isSecurePassword() {
        return $('input:password').val().length < 8 ? false : true;
    }
    
    function isValidEmail() {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test($('#inputEmail'));
    }

    function isValidTelephone() {
        return $("#inputTel").val.length != 9 ? false : true;
    }

});