const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

// let monto =0;
// let respuesta=undefined;


Given('el saldo es {int} intento descontar el monto Bs. {int}', function (saldo, montoDescontar) {
    // monto = montoDescontar;
    this.setToMonto(montoDescontar);
});

When('realizo la peticion POST para descontar el saldo', async function () {
    let _this = this;
    await httpClient({
        method: 'POST',
        uri: 'http://localhost:3000/billetera/descontar/saldo',
        json: true,
        body: {"monto": this.montoDescuento},
        resolveWithFullResponse: true
    })
    .then(function(response){
        _this.setCode(response.statusCode);
    })
    .catch(error=>{
        console.log(error.statusCode);
        _this.setCode(error.statusCode);
        _this.setToMensajeError(error.error.error);
    })
});

Then('un mensaje {string}', function (mensajeError) {
    expect(this.mensajeError).to.equal(mensajeError);
});