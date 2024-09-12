console.log("Conteo de vocales");

/**
 Encuentra el número de letras que existen en el
 nombre indicado.
 @letra {string} letra a buscar
 @nombre {string} texto a buscar la letra
 @return número de letras encontradas
*/
function encontrarNumeroDeLetra(letra, nombre) {    
    let numeroDeLetras = 0;
    for(let index = 0; index < nombre.length; index++ ) {
        let letraAEvaluar = nombre.charAt(index);
        if(letraAEvaluar === letra){
            numeroDeLetras++;
        }
    }
    return numeroDeLetras;
}

function leerValorDeNombre(){
    const inputNombre = document.getElementById("nombre");
    return inputNombre.value;
}

function imprimirResultado(resultado) {
    const paragraph = document.getElementById("vocales"); // Cambio de 'documento' a 'document'
    paragraph.innerHTML = resultado;
}

function manejoDelEventoDeInputNombre() {
    const nombre = leerValorDeNombre().toLowerCase(); // Cambio de 'toLoweCase' a 'toLowerCase'
    const numLetraA = encontrarNumeroDeLetra("a", nombre); // Corrección de sintaxis
    imprimirResultado("Num letras A: " + numLetraA);
}
