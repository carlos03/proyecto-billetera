var expect  = require('chai').expect;
var request = require('request');

describe('Pruebas de ingreso y egreso a la billetera',  function(){
    
    it("Dado que ingrese monto de 50 envio monto 45 para descontar el resultado deberia ser 5", function(done){
        let montoDescontar = 45;
        let montoAumentar = 50;
        let saldo = 5
        request({
            method : "POST",
            uri:"http://localhost:3000/billetera/agregar/saldo",
            json:true,
            body:{"monto":montoAumentar}
        },function(error,response,body){            
            request({
                method : "POST",
                uri:"http://localhost:3000/billetera/descontar/saldo",
                json:true,
                body:{"monto":montoDescontar}
            },function(error,response,body){
                expect(body.saldo).to.equal(saldo);
                done();
            });
        });
               
    });
    
    it("Envio un monto vacio para aumentar y el resultado es un status 400",async function(){
        let montoAumentar = "";
        let status = 400;
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/agregar/saldo",
            json:true,
            body:{"monto":""}   
        },function(error,response,body){
            expect(response.statusCode).to.eql(status);
        });
    });

    it("Envio un monto con signo negativo(-45) para aumentar y el resultado es un status 400",async function(){
        let montoAumentar = -45;
        let status = 400;
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/agregar/saldo",
            json:true,
            body:{"monto":montoAumentar}   
        },function(error,response,body){
            expect(response.statusCode).to.eql(status);
        });
    });

    it("Envio un monto mayor al saldo para descontar (500) y el resultado es un status 400",async function(){
        let montoDescontar = 500;
        let status = 400;
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/descontar/saldo",
            json:true,
            body:{"monto":montoDescontar}   
        },function(error,response,body){
            expect(response.statusCode).to.eql(status);
        });
    });

    it("Envio un el monto 500 para aumentar el servicio respondera status 200",async function(){
        let montoAumentar = 500;
        let status = 200;
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/agregar/saldo",
            json:true,
            body:{"monto":montoAumentar}  
        },function(error,response,body){
            expect(response.statusCode).to.eql(status);
        })
    });

    it("Dado que ya ingrese un monto de 500 envio un monto menor al saldo para descontar 100 y el resultado es un status 200",async function(){
        let montoDescontar = 100;
        let status = 200;
        await request({
            method : "POST",
            uri:"http://localhost:3000/billetera/descontar/saldo",
            json:true,
            body:{"monto":montoDescontar}   
        },function(error,response,body){
            expect(response.statusCode).to.eql(status);
        });
    });

});


// "test": "nodemon ./node_modules/.bin/mocha --reporter spec"