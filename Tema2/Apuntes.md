## 24/09/2018

# Tema 2: Introducción a Javascript y al DOM

## Declaración de variables locales y globales

### Variable local:

```
var alcance;
alcance = 5;
alcance = alcance * 3;
alcance = "ya no quiero ser un entero"; 

typeof alcance; // "string"
```

Si declaramos dentro de una función, haciendo referencia fuera de ella no obtendremos ningún valor.

```
function foo () {
    var bar = “Hola mundo”;
   console.info(bar);  //Hola mundo
}

console.info(bar); // bar is not defined
```

Si declaramos la variable dentro de un for, en cambio, sí.

Si usamos **let** en vez de **var**, el valor que tenga esa variable sólo es válido dentro del contexto en el que ha sido definidal, por tanto:

```
var nombre = ‘Ana’
If ( nombre ) {
   let nombre = ‘Maria’;
   console.info(nombre); // María
}

console.info(nombre);  // Ana

```

### Variable global:

Se declara sin usar la palabra reservada **var**

```alcance2 = 5;```

## 25/09/2018

**Echarle un ojo al patrón módulo**

## Bucles y estructuras

### Bucle While
Como siempre:

```
var cucharadas = 10; 
while (cucharadas > 0) {
    alert (“Queda helado!”);  
    cucharadas = cucharadas - 1;
}

alert(“se acabó el helado”); 
```

### Bucle For

Como siempre: 

Se puede usar ```var``` para que la variable se pueda usar en todo el bloque de código o ```let``` para que solo tome valor en el contexto en el que se ha declarado, osea, el bucle for. 
```
for (var cucharadas = 10; cucharadas > 0; cucharadas--) {
    alert(“Hay más helado!");
}
```

### Bucle For/In

En este caso, ```texto = persona[nombre] + persona[apellido] + persona[edad]```

```
var persona = {nombre:"Juan", apellido:"Sierra", edad:25};
var texto = "";
var x;
for (x in persona) { //x toma el nombre de la propiedad
    texto += persona[x];
}

//texto = JuanSierra25
```

### If y Switch

Como siempre.

### Objetos Date

```var day = new Date().getDay()```

### Cambiar texto en un párrafo

```
var planet = document.getElementById('greenplanet');



planet.textContent = 'Red alert: hit by phaser fire!';
```

## Arrays

Declaración básica de un array:

```
var temperaturasHora = new Array();

temperaturasHora[0] = 42;
temperaturasHora[1] = 42.4;
temperaturasHora[2] = 41;
temperaturasHora[3] = 40.6;
temperaturasHora[6] = 39.6; 

// los valores intermedios se quedan indefinidos y la longitud del array será 7.
// aun asi, los elementos [4] y [5] existen.
// se comporta como un arraylist en java, son de estructura dinámica.
```

Se obtienen los valores de los elementos tal que ```array[elemento]```.

Existen los métodos length y tal.

### Para **borrar** un elemento podemos usar 

```
array[elemento] = null
```

o

```
array.splice(2,3);

// borramos 3 elementos a partir del 2, por lo que desaparecerían los elementos 2, 3 y 4.
```

## Funciones comunes (PENDIENTE DE RELLENAR)

### String:


- length:

- \+:

- toUpperCase y toLowerCase:

- charAt(position):

- indexOf(cadena1):

- substring(inicio, final):

- substr():

- split(separador):

### Arrays

- length:

- concat:

- join:

- pop:

- push:

- shift:

- unshift:

- reverse:

### Ejercicio propuesto:
```
Haz una página que pida el número de DNI y la letra y compruebe si se corresponden. Para ello utiliza el siguiente array: 

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Para averiguar la letra, divide el número del DNI por 23 y obtén el resto. La letra correspondiente a ese DNI ocupa en el array de letras el lugar indicado por el resto de la división.

Para pedir los datos, utiliza por el momento el método prompt().
EjercicioParimpar: Pide un número por teclado e indica si es par o impar.
EjercicioMayusculas: Pide una cadena por teclado e indica si está formada por mayúsculas, minúsculas o ambas.
EjercicioPalindromo: Pide una cadena por teclado e indica si es un palíndromo.
```

- [x] Días
- [x] DNI
- [x] Mayúsculas
- [x] Par/Impar
- [x] Palíndromo