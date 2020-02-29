window.onload = function(){
  
    let btnGuardar = document.getElementById('btnGuardar');

    function getData(){

        let nombre = document.getElementById('nom');
        let apellido = document.getElementById('ape');
        let materia = document.getElementById('mat');
        let examenA = document.getElementById('exA');
        let examenB = document.getElementById('exB');

        return {
            nombre: nombre.value,
            apellido: apellido.value,
            materia: materia.value,
            examenA: parseInt(examenA.value),
            examenB: parseInt(examenB.value)
        };
      
    }
    function validar(a){
        if(a.nombre.length > 10){
            alert("Nombre no puede ser de mas de 40 caracteres");
            return;
        }
        else if(a.nombre == ""){
            alert("El nombre es un campo requerido");
            return;
        }
        else if(a.apellido.length > 40){
            alert("Apellido no puede tener mas de 40 caracteres");
            return;
        }
        else if(!a.apellido) {
            alert("Apellido es un campo obligatorio");
            return;
        }
        else if(!a.materia){
            alert("Debe seleccionar una materia");
            return;
        }
        else if(a.examenA > 10 || a.examenA < 0 ){
            alert("La nota debe ser un numero mayor de 0 y menor de 11");
            return;
        }
        else if(a.examenB > 10 || a.examenB < 0 ){
            alert("La nota debe ser un numero mayor de 0 y menor de 11");
            return;
        }
        return true;
    }

    function promedio (a , b){
        return (a + b)/2;
    }

    btnGuardar.onclick = function(){
        let data = getData();
        if(validar(data)){
            let nuevaFila = document.createElement('tr');
            let materia = data.materia;
            let promMat = promedio(data.examenA,data.examenB);
            nuevaFila.innerHTML = '<td>'+ materia + '</td> <td>' + promMat + '</td>';
            let tabla = document.getElementById('tabla');
            tabla.appendChild(nuevaFila);
            btnGuardar.disabled = true;
        }
    }
    
}