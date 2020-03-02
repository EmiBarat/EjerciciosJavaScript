window.onload = function(){
    let btnGuardarFactura = document.getElementById('btnGuardarFactura');
    let btnAgregarProducto = document.getElementById('btnAgregarProducto');

    function getDataFactura(){
        let numeroFactura = document.getElementById('txtNroFact');
        let fechaFactura = document.getElementById('dtpFechaFactura');
        let cliente = document.getElementById('txtCliente');
        let condicionIva = document.getElementsByName('iva');

        return {
            numeroFactura : numeroFactura.value,
            fechaFactura : fechaFactura.value,
            cliente : cliente.value,
            condicionIva : parseFloat(condicionIva.value) 
        };
    }

    function getDataProducto(){
        let descripcionProducto = document.getElementById('txtDescripProd');
        let precioUnitario = document.getElementById('txtPrecioUni');
        let cantidad = document.getElementById('txtCantidad');

        return{
            descripcionProducto : descripcionProducto.value,
            precioUnitario : parseFloat(precioUnitario.value),
            cantidad : parseInt(cantidad.value) 
        };
    }

    function validarFactura(a){
        if (!a.numeroFactura){
            alert("El campo 'Nro de Factura' no puede quedar vacio");
            return;
        }
        //NO SE COMO SE TOMA LA FECHA ACTUAL!!!!
        // if(a.fechaFactura > Date(getTime())){
        //     alert("Ingreso una fecha no permitida");
        //     return;
        // }
        if(!a.cliente){
            alert("El campo 'Cliente' no puede quedar vacio")
            return;
        }
        return true;
    }

    function validarProducto(p){
        if(!p.descripcionProducto){
            alert("Es un campo requerido");
            return;
        }
        if(p.precioUnitario < 0){
            alert("El campo no acepta valores negativos");
            return;
        }
        if(p.cantidad < 0 || p.cantidad%1 != 0){
            alert("El campo no acepta valores negativos, ni decimales");
            return;
        }

    }

    function calcularImporte(a, b){
        let importe = a * b;
        return importe;
    }

    // btnGuardarFactura.onclick = function(){
    //     let dataFactura = getDataFactura();
    //     if(validarFactura(dataFactura)){
    //         alert("La factura numero " + numeroFactura + "\nDe fecha " + fechaFactura + 
    //         "\nDel cliente: " + cliente + "\nA la que se le aplica un " + condicionIva);
    //         // En este punto me gustaria mejorar la navegabilidad habilitando los campo
    //         // de carga del producto
    //     }
    // }

    btnAgregarProducto.onclick = function(){
        let dF = getDataFactura();
        let dP = getDataProducto();
        if(validarFactura(dF)){
            if(validarProducto(dP)){
                let nuevaFila = document.createElement('tr');
                // let infoVenta = getDataProducto();
                nuevaFila.innerHTML = '<td>'+dP.descripcionProducto+'</td> <td>'
                                        + dP.precioUnitario+'</td> <td>'
                                        + dp.cantidad+'</td> <td>'
                                        + calcularImporte(dp.precioUnitario, dp.cantidad) + '</td>';
                let tablaProductos = document.getElementById('tablaProductos');
                tablaProductos.appendChild(nuevaFila);
                //aca continua todo lo de sub total impuesto y Total.
            }
        }   
        
    }

};