(function() {
    var form = document.getElementById("form");

    var validate = new Validador(form);
    
    validate.setPassWordLength(32);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        validate.validar();
    });

})();