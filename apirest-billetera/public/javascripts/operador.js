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
    let selectorDescontar = $('[name="input-aumentar"]');
    let monto = selectorDescontar.val();
    console.log(monto);
    if(monto === "" || isNaN(monto) || monto === undefined){
        mostrarExcepcion("Debe Ingresar solo numeros");
        return;
    }
    $.post("http://localhost:3000/billetera/descontar/saldo",{"monto":monto})
    .done((result)=>{

    })
    .fail((error)=>{

    });
}

function descontarSaldo(){
    limpiarMensajeExcepcion();
    let selectorDescontar = $('[name="input-descontar"]');
    let monto = selectorDescontar.val();
    console.log(monto);
    if(monto === "" || isNaN(monto) || monto === undefined){
        mostrarExcepcion("Debe Ingresar solo numeros");
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

    let row = `<tr><td>${transaccion.descripcion}</td><td>${transaccion.monto}</td></tr>`;
    let selectoTabla = $('#tabla-transaccion');
    selectoTabla.append(row);
}
function actualizarSaldo(result){
    let selector = $('[name="saldo"]');
        selector.text("Saldo Actual Bs. "+result.saldo);
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

$( document ).ready(function() {
    obtenerSaldo();
    detalleIngresoSalidaSaldo();
});