function potencia (a,b){
    resultado = a;
    if(b==0){
        resultado = 1;
    }
    for(let i =0; i < b-1; i++){
        resultado *= a;
    }
    return resultado;
}