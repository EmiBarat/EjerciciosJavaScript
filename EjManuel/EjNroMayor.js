const array = [22,-5,8,-14,16,13,2];
function max (array){
    let mayor = array[0];
    for(i = 1; i < array.length; i++){
        if(mayor < array[i] ){
            mayor = array[i];
        }

    }
    return mayor;
}