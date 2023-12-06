let entradaTexto = document.getElementById('entradaTexto');

let numeroCaracteresConEspacio = document.getElementById('numeroCaracteresConEspacio');
let numeroCaracteresSinEspacio = document.getElementById('numeroCaracteresSinEspacio');

function ContarCaracteres() {
    entradaTexto = document.getElementById('entradaTexto').value.toString();

    
    console.log(entradaTexto.length+1);
    
    numeroCaracteresConEspacio.innerHTML = (entradaTexto.length+1);
    numeroCaracteresSinEspacio.innerHTML = (entradaTexto.length+2) - (entradaTexto.split(" ").length+1);

}

entradaTexto.addEventListener('keydown', ContarCaracteres);
