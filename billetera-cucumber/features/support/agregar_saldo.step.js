const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let saldoActual = undefined;
let monto ={};
let httpOptions = {};
let respuesta=undefined;

    Given('el saldo {int} And el monto Bs. {int}', function (saldo, montoAgregar) {
        saldoActual = saldo;
        monto = montoAgregar;
    });

    When('preparo el JSON para la peticion', function () {
        httpOptions = {
            method: 'POST',
            uri: 'http://localhost:3000/billetera/agregar/saldo',
            json: true,
            body: {"monto": monto},
        }
    });
    Then('realizo la peticion POST a la url para agregar saldo', async function () {
        await httpClient(httpOptions)
        .then(function(response) {
            respuesta = response;
        })
        .catch(function(error) {
            respuesta = error;
        });
    });

    Then('recibo el resultado {int}', function (resultado) {
        
        expect(respuesta.saldo).to.eql(resultado);
      });
