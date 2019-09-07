const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let montoDescuento = 0;
let respuesta = undefined;

Given('el saldo es {int} intento descontar el monto Bs. {int}', function (saldo, montoDescontar) {
    montoDescuento = montoDescontar;
});

When('realizo la peticion POST para descontar el saldo', async function () {
    
    await httpClient({
        method: 'POST',
        uri: 'http://localhost:3000/billetera/descontar/saldo',
        json: true,
        body: {"monto": montoDescuento},
        resolveWithFullResponse: true
    })
    .then(function(response){
        respuesta = response;
        return;
    })
    .catch(error=>{
        respuesta = error;
        return;
    })
});

Then('un mensaje {string}', function (mensajeError) {
    expect(respuesta.error.error).to.equal(mensajeError);
});