var expect  = require('chai').expect;
var request = require('request');
var saldoActual = 876;

describe('Pruebas de ingresos',function(){
    let monto=100;
    it("Aumento un monto 100 y el resultado debe ser saldoActual + monto", function(done){
        
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
    
});

describe('Prueba de egreso',function(){
    let monto=12;
    it("Envio monto X el resultado deberia ser saldoActual - X",function(done){
        let monto = 50;
        request.post("http://localhost:3000/billetera/descontar/saldo",
        {
            json:{"monto":monto}
        },
        (error,res,body)=>{
            console.log(error,res,body);
            expect(body.saldo).to.equal(saldoActual - monto);
            done();
        });
        
    });
})


// "test": "nodemon ./node_modules/.bin/mocha --reporter spec"