const array = ["perro", "gato", "jirafa", "lion", "tortuga", "serpiente"];
function buscar(a , p){
    let posicion = -1;
    for(let i = 0; i < array.length; i++ ){
        
        if(p === array[i]){
            posicion = i;
        }
        
    }
    return posicion;
}
const resultado = buscar(array, "jirafa");
console.log(resultado);