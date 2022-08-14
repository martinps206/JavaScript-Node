document.getElementById("demo").innerHTML = "Hello JavaScript!";


/* document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
} */


function confirmacion() {
	var pregunta = confirm("¿Deseas visitar interesante :P ?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://github.com/martinps206";
	}else{
		alert("Quizás en otro momento...\n Gracias de todas formas")
	}
}


let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://www.biografiasyvidas.com/biografia/e/fotos/euler.jpg') {
        miImage.setAttribute('src', 'https://ichef.bbci.co.uk/news/624/cpsprodpb/15C7A/production/_101301298_euler-arriba.jpg.webp');
    } else {
        miImage.setAttribute('src','https://www.biografiasyvidas.com/biografia/e/fotos/euler.jpg');
      
    }
}


/* const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!'; */


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido, ' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}