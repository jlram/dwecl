/**
 * Clase validadora;
 * - array con el numero de elementos a validar, todos con el valor true
 * - distintas funciones para validar dependiendo del tipo de input del formulario
 * - al final de la validacion si alguna es false pos devuelve false
 */

 class Validador {

        constructor(form) {
            this._form = form;
            this._elementos = form.getElementsByTagName("INPUT");
            this._number = 16;
        }

        setPassWordLength(length) {
            this._number = length;
        }

        validar() {
            this.validarEmail();
            this.validarPWD();
            this.validarCP();
            this.validarArchivoPNG();
        }
        
        validarArchivoPNG() {
            var archs = this._form.querySelectorAll('input[type="file"]');
            for (let item of archs) {
                var files = item.files;
                var extension = files[0].type;
                if(extension !== "image/png") {
                    alert("Por favor, envia una imagen con extensión png");
                }
            }
        }

        validarCP() {
            var cps = this._form.querySelectorAll('[name="cp"]');
            for (let item of cps) {
                if(isNaN(item.value)) {
                    alert("Introduce un número como código postal");
                } else {
                    if(item.value.length !== 5) {
                        alert("El codigo postal tiene que ser de 5 números");
                    }
                }
            }
        }

        validarEmail() {
            var emails = this._form.querySelectorAll('input[type="email"]');

            for (let item of emails) {
                    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                    if(!re.test(item.value)) {
                        alert("El email no cumple las reglas necesarias");
                    }
            }
        }

        validarPWD() {
            var pwds = this._form.querySelectorAll('input[type="password"]');
            for (let item of pwds) {
                if(item.value.length < this._number) {
                    alert("La contraseña es menor de los caracteres requeridos");
                }
            }
        }

        validarTel() {
            var tels = this._form.querySelectorAll('input[type="tel"]');
            for (let item of tels) {
                if(isNaN(item)) {
                    alert("Introduce un número de teléfono");
                } else {
                    if(item.length < 9) {
                        alert("Introduce un número de teléfono válido");
                    }
                }
            }
        }
 }