window.onload = function(){
    
    function $(selector){
        return
        document.querySelector(selector);
    }

    //var btnCambiarColor = $('button id="cambiarColor"]');
    var btnCambiarColor = document.getElementById("cambiarColor");
    var titulo = document.getElementById("titulo");
    //esta forma esta buena para ver que tipo de variable es...
    var tipo = typeof titulo;
    console.log(tipo);

    //se podria validar entradas no validas
    function cambiarColorTexto(a){
        if(a == 1){
            alert("Color elegido es rojo");
            titulo.setAttribute("class","red");
        }
        else if(a == 2){
            alert("Color elegido es azul");
            titulo.setAttribute("class","blue");
        }
        else if(a == 3){
            alert("Color elegido es amarillo");
            titulo.setAttribute("class","yellow");
        }
    }
    //la propiedad "onclick" del elemnt button realiza lo definido en la funcion
    //toma en la var 'nroElegido' el nro ingresado por el usuario y lo uso como
    //parametro en la llamada a la fincion
    btnCambiarColor.onclick = function(){
        var nroElegido = prompt("para cambiar a rojo ingrese '1' \nPara azul '2' \nPara amarillo '3' \nPara cancelar '0'");

        cambiarColorTexto(nroElegido);
    }

    //vamos a tratar de que el usuario cree un parrafo con un texto introducido por un txtBox
    //y mostrarlo con formato cool
    var btnParrafo = document.getElementById("btnParrafo");
    var txtParrafo = document.getElementById("txtParrafo");
    
    //dos funciones bobas para jugar con los liseteners del input type text
    txtParrafo.onfocus = function(){
        txtParrafo.setAttribute("class","txtParrafoFocus");
    }
    txtParrafo.onblur = function(){
        txtParrafo.setAttribute("class","txtParrafoOriginal");
    }
//asigno a una variable el nodo con el texto ingresado en el input para poder pasarselo al 
//elemento <p> que cree en el onclick del btnParrafo
    
    var divParrafo = document.getElementById("divParrafoLindo");
    
    btnParrafo.onclick = function(){
        var textoParrafo = txtParrafo.value;
        var parrafo = document.createElement("p");
        var contenidoParrafo = document.createTextNode(textoParrafo);
        parrafo.appendChild(contenidoParrafo);
        divParrafo.appendChild(parrafo);
        parrafo.setAttribute("class", "textoBello");
    }
    
}
