function pulsaciones(event){
    let nombreAnimal = event.target.getAttribute('class');
    let textoUltimo = document.getElementById('ultimo');
    textoUltimo.innerHTML = nombreAnimal;
    textoUltimo.style.backgroundColor = 'yellow';

    let mensaje =  event.target.parentNode.getElementsByClassName('mensaje')[0];
    let contador = mensaje.innerHTML;
    if (contador == 'Sin pulsaciones') {
        mensaje.innerHTML = 1;
    }
    else {
        contador++;
        mensaje.innerHTML = contador;
    }
}

function inicializar() {
    let imagenes = document.getElementsByClassName('perro');
    for (let i = 0; i <imagenes.length; i++) {
        imagenes[i].addEventListener('click', pulsaciones);
    }

    let imagen = document.getElementsByClassName('gato');
    for(let i =0 ; i<imagen.length ; i++){

        imagen[i].addEventListener('click',pulsaciones);
    }

}
window.addEventListener('load', inicializar);