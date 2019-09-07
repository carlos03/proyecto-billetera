const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let monto =0;
let respuesta=undefined;

    Given('el monto Bs. {int}', function (montoAgregar) {
        monto=montoAgregar;
    });
    When('realizo la peticion POST a la url para agregar saldo',async function () {

        await httpClient({
            method: 'POST',
            uri: 'http://localhost:3000/billetera/agregar/saldo',
            json: true,
            body: {"monto": monto},
            resolveWithFullResponse: true
        })
        .then(function(response){
            respuesta = response;
            return;
        })
        .catch(error=>{
            respuesta = error;
            return;
        });
    });
    Then('recibo un status {int}', function (status) {
        expect(respuesta.statusCode).to.equal(status);
    });
