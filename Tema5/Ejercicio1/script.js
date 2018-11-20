/**
 * Ejercicio1:  añadir  una  serie  de  métodosal  objetoArray:
 * ultimo()  devuelve  elúltimo  elemento  de  una  matriz,  sin  quitarlo  de  la  matriz.
 * primero()devuelve  el  primer  elemento  de  la  matriz.
 * limpia()  limpia  la  matriz  (quita  todos  los  elementos).
 * compacta()  elimina  los  elementos  indefinidos.
 */
(function () {
    var vector = new Array("1", "2", "3", "4");

    Array.prototype.ultimo = function () {
        var ultimo = this.length - 1;
        return this[ultimo];
    };

    Array.prototype.primero = function () {
        return this[0];
    };

    Array.prototype.limpia = function () {
        // for (item of this) {
        //     this.splice(item, 1);
        // }

        this.forEach((value, index, array) => this.splice(index,1));
        this.splice(3, 1);
    };

    Array.prototype.compacta = function () {
        // for(item of this) {
        //     if(item === undefined || item === null || item === "") {
        //         this.splice(item, 1);
        //     }
        // }
        var vector2 = this.filter(item => item !== undefined);

        vector = vector2;
    };

    console.log(vector.ultimo());
    console.log(vector.primero());
    vector.limpia();
    console.log(vector.length);
    vector[0] = "0";
    vector[121] = "10"
    vector.compacta();
    console.log(vector);



})();