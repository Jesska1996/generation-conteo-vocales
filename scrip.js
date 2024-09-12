console.log  (conteo de vocales)
/**
 Encuentra el número de letras que existen en el
 nombre
 @letra {string} letra a buscar
 @nombre {string} texto a buscar la letra
 return número de letras encontradas
*/
function encontrarNumeroDeLetra( letra, nombre ) {    
    let numeroDeLetras = 0;
    for(let index = 0; index < nombre.length; index++ ) {
        let letraAEvaluar = nombre.charAt( index );
        if( letraAEvaluar === letra){
            numeroDeLetras++;
        }
    }
    return numeroDeLetras;
}
fuction manejoDelEventoDeNombre (){
   const inputNombre = document.getElementById ("nombre")
    return inputNombre.value;
}
fuction manejoDelEventoDeInputNombre ()}
    const nombre = leerValorDeNombre () .toLowerCase ();
    );
    const numLetraA = encontrarNumeroDeLetra("a", nombre);
    const numLetraAMayus = encontrarNumeroDeLetra("A", nombre);
    console.log("Num letras A: " + numLetraA );
}
