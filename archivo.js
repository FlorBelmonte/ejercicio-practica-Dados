
function lanzardados(){
    let suma =0 
    let cantidadSiete = 0
    for (let i=1; i<=1000; i++){
     let dado1 = getRandomIntInclusive(1, 6);
        let dado2 = getRandomIntInclusive(1, 6);
        suma = dado1 + dado2;
        if(suma == 7){
        cantidadSiete++
    }
    document.getElementById("imagendado1").src="./"+dado1+".png" //la imagen de los dados es simbólica, devuelve la ultima tirada
    document.getElementById("imagendado2").src="./"+dado2+".png"
    console.log(dado1)
    console.log(dado2)
    console.log(suma)
    document.getElementById("sumaDados").innerHTML= suma;
    document.getElementById("cantidadSiete").innerHTML= cantidadSiete;
}
}



// funcion que devuelve un aleatorio incluyendo el valor minimo y el maximo 
function getRandomIntInclusive(min, max){
    return Math.round(Math.random() * (max - min) + min);
}