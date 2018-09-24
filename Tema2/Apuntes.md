## 34/09/2018

# Tema 2: Introducción a Javascript y al DOM

## Declaración de variables locales y globales

### Variable local:

```
var alcance;
alcance = 5;
alcance = alcance * 3;
alcance = "ya no quiero ser un entero"; 

typeof alcance = "string";
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

```
alcance2 = 5;
```