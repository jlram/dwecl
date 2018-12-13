$(function() {

    $("#form").submit(function(e){
        e.preventDefault();

        $( "#groupNombre .label" ).remove();
        $( "#groupPass #label1" ).remove();
        $( "#groupPass #label2" ).remove();
        $( "#groupEmail .label" ).remove();
        $( "#groupTel .label" ).remove();

        if(!isValidName()) {
            $("#groupNombre").append('<span class="label label-important" style="color:red;">Introduce un nombre válido</span>');
        }

        if(!isSecurePassword()) {
            $("#groupPass").prepend('<span class="label label-important" id="label1" style="color:red;">Introduce una contraseña válida</span>');
        }

        if(!isSamePassword()) {
            $("#groupPass").append('<span class="label label-important" id="label2" style="color:red;">Las contraseñas no coinciden</span>');
        } 

        if(!isValidEmail()) {
            $("#groupEmail").append('<span class="label label-important" style="color:red;">Introduce un email válido nombre@email.com</span>');
        }

        if(!isValidTelephone()) {
            $("#groupTel").append('<span class="label label-important" style="color:red;">Introduce un teléfono válido (9 dígitos)/span>');
        }
    });

    function isValidName() {
        return $('input:text').val().length === 0 ? false : true;
    }

    function isSecurePassword() {
        return $('input:password').val().length < 8 ? false : true;
    }

    function isSamePassword() {
        return $('#inputPass').val() == $('#inputPass2').val() &&  $('#inputPass').val().length !== 0 ? true : false;
    }
    
    function isValidEmail() {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test($('#inputEmail'));
    }

    function isValidTelephone() {
        return $("#inputTel").val.length != 9 ? false : true;
    }
});