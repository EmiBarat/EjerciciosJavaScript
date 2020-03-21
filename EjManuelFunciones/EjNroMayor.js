const array = [-14,-8,0];
function max (array){
    let mayor = array[0];
    for(i = 1; i < array.length; i++){
        if(mayor < array[i] ){
            mayor = array[i];
        }

    }
    return mayor;
}