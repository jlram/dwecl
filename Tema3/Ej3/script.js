/*
Realiza  una  página  que  saque  una  serie  de  diapositivas  a  partir 
de  unos  ficheros  con  fotos.  El  pase de  diapositivas 
será  automático  cada  2  segundos  y  aparecerá  además  de  la 
foto  el  título  de  la  misma.
Puedes  añadir  las  funcionalidades  que  se  te  ocurran
*/

// Funcion de encapsulamiento
(function() {

	function cambiarFoto(numFoto){
		//Cogemos los nodos del DOM necesarios
		var fotos = document.querySelector('.galeria').getElementsByTagName('img');
		var titulo = document.getElementById('titulo');
		var imagen = titulo.nextElementSibling;

		var index = numFoto;
		if(index >= fotos.length){
			index = 0;
		}
		
		// Procedemos a cambiar la foto
		imagen.setAttribute('src', fotos[index].getAttribute('src'));
		titulo.textContent = fotos[index].getAttribute('title');
		
		// Se auto llama sumando al indice
		window.setTimeout( function(){cambiarFoto(index+1)}, 5000);
	}
	
	cambiarFoto(0);

}());