function obtenerSaldo(){
    $.get("http://localhost:3000/billetera/consultar/saldo")
    .done((result)=>{
        actualizarSaldo(result);
    })
}
function detalleIngresoSalidaSaldo(){
    $.get("http://localhost:3000/billetera/transacciones/saldo")
    .done((result)=>{
        let rows = result.map((transaccion,index)=>{
            return `<tr><td>${transaccion.descripcion}</td><td>${transaccion.monto}</td></tr>`;
        })
        let selectoTabla = $('#tabla-transaccion');
        selectoTabla.append(rows);
    });
}

function agregarSaldo(){
    limpiarMensajeExcepcion();
    let selectorAgregar = $('[name="input-aumentar"]');
    let monto = selectorAgregar.val();
    console.log(monto);
    if(monto === "" || isNaN(monto) || monto === undefined){
        mostrarExcepcion("Debe Ingresar solo numeros");
        selectorAgregar.val("");
        return;
    }
    
    $.post("http://localhost:3000/billetera/agregar/saldo",{"monto":monto})
    .done((err,res,result)=>{
        selectorAgregar.val("");
        actualizarSaldo(result.responseJSON);
        agregarFilaTransaccion(result.responseJSON);
    })
    .fail((error)=>{
        console.log(error.responseJSON.error);
        selectorAgregar.val("");
        mostrarExcepcion(error.responseJSON.error)
    });
}

function descontarSaldo(){
    limpiarMensajeExcepcion();
    let selectorDescontar = $('[name="input-descontar"]');
    let monto = selectorDescontar.val();
    console.log(monto);
    if(monto === "" || isNaN(monto) || monto === undefined){
        mostrarExcepcion("Debe Ingresar solo numeros");
        selectorDescontar.val("");
        return;
    }
    $.post("http://localhost:3000/billetera/descontar/saldo",{"monto":monto})
    .done((result)=>{
        console.log(result);
        selectorDescontar.val("");
        actualizarSaldo(result);
        agregarFilaTransaccion(result);
    })
    .fail((error)=>{
        console.log(error.responseJSON.error);
        selectorDescontar.val("");
        mostrarExcepcion(error.responseJSON.error)
    })
    
}

function agregarFilaTransaccion(transaccion){

    let row = `<tr><td>${transaccion.descripcion}</td><td>
    ${transaccion.monto}</td><td>${transaccion.saldo}</td></tr>`;

    let selectoTabla = $('#tabla-transaccion');
    selectoTabla.append(row);
}
function actualizarSaldo(result){
    let selector = $('[name="saldo"]');
        selector.text(result.saldo);
}

function mostrarExcepcion(mensaje){
    let selectorWarning = $('[name="mensaje-warning"]');
    selectorWarning.text("");
    selectorWarning.text(mensaje);
}

function limpiarMensajeExcepcion(){
    let selectorWarning = $('[name="mensaje-warning"]');
    selectorWarning.text("");
}
