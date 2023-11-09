function pulsaciones(event){
    let nombreAnimal = event.target.getAttribute('class');
    let textoUltimo = document.getElementById('ultimo');
    textoUltimo.innerHTML = nombreAnimal;
    textoUltimo.style.backgroundColor = 'yellow';
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