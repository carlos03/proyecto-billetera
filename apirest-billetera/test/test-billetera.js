var expect  = require('chai').expect;
var request = require('request');
describe('demo unit test',function(){
    it('Prueba hola mundo',function(done){
        request('http://localhost:3000/billetera/prueba',function(error,res,body){
            expect(body).to.equal("hola mundo");
            done();
        })
    })

    it('Prueba hola mundo vacio',function(done){
        request('http://localhost:3000/billetera/prueba',function(error,res,body){
            expect(body).to.equal("");
            done();
        })
    })
})
