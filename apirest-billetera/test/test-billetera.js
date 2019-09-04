var expect  = require('chai').expect;
var request = require('request');

describe('Pruebas de ingresos',function(){
    var saldoActual = 0;

    it("Aumento un monto X y el resultado debe ser saldoActual + monto", function(done){
        let monto=100;
        request.post("http://localhost:3000/billetera/agregar/saldo",
        {
            json:{"monto":monto}
        },
        function(error,res,body){
            console.log(body);
            expect(body.saldo).to.equal(saldoActual + monto);
            saldoActual = body.saldo;
            done();            
        });
    });
    it("Envio monto vacio eseprando respuesta una excepcion",function(done){
        let monto = 50;
        request.post("http://localhost:3000/billetera/descontar/saldo",
        {
            json:{"monto":""}
        },
        (error,res,body)=>{
            expect(body.saldo).to.equal(saldoActual - monto);
            done();
        });
        
    });
});


// "test": "nodemon ./node_modules/.bin/mocha --reporter spec"