// arreglo que contiene las posibles letras asignadas al DNI; el resto de la division (nroDNI / 23) nos da la posicion del arreglo.
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Creo una funcion que asigne los valores ingresados por el usuario a las variables
function cargarVariables(){
    var numeroDNI = Document.getElementById("numeroDNI").value;
    var letraDni = Document.getElementById("letraDNI").value;
    alert(numeroDNI + "   " + letraDni);
}


