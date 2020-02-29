window.onload = function(){
    let factor1 = document.getElementById('factor1');
    let factor2 = document.getElementById('factor2');
    let botonCalcular = document.getElementById('botonCalcular');
    let resultado = document.getElementById('resultado');

    botonCalcular.onclick = function multiplicar(){
        resultado.value = parseFloat(factor1.value) * parseFloat(factor2.value)
    } 
}

