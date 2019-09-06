var expect  = require('chai').expect;
var request = require('request');
// var request = require('axios');

var saldoActual = undefined;

describe("Consulta de Saldo",  function(){
    let monto = 50;
    
    it("Aumento un monto "+monto+" y el resultado OK", async function(){
        
        // await request.post("http://localhost:3000/billetera/agregar/saldo",{
        //     "monto":monto
        // })
        // .then(response=>{
        //     expect(response.statusText).to.equal("OK");
        // })
        // .catch(err=>{

        // });

        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/agregar/saldo",
            json:true,
            body:{"monto":monto}
        })
        .then((body)=>{
            console.log(status,body);
            expect(body.saldo).to.equal("OK");
            saldoActual = body.saldo;
                       
        })
        .catch((error)=>{

        });
    });
    monto = ""
    it("Envio monto "+monto+" el resultado deberia ser saldoActual - X",async function(){
        // await request.post("http://localhost:3000/billetera/descontar/saldo",{
        //     "monto":monto
        // })
        // .then(response=>{
        //     let saldoAnterior = response.data.saldoAnterior;
        //     expect(response.saldo).to.equal(saldoAnterior);
        // })
        // .catch(err=>{

        // });
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/descontar/saldo",
            json:true,
            body:{"monto":monto}
        })
        .then((err,response,body)=>{
            // console.log(response);
            expect(body.saldo).to.equal(saldoActual - monto);
            
        })
        .catch(err=>{
            // console.log(err);
        });
        
    });
});


// "test": "nodemon ./node_modules/.bin/mocha --reporter spec"