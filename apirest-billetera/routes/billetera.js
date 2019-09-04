var express = require('express');
var router = express.Router();

var saldo = 90;

var listaSaldo = [
    {descripcion: "Ingreso",monto:100},
    {descripcion: "Salio",monto:10}
];

router.get('/consultar/saldo',(req,res)=>{
    res.json({"saldo":saldo});

});

router.post('/agregar/saldo',(req,res)=>{
    let monto = req.body.monto;
    console.log(req.body);
    if(typeof monto != 'number'){        
        return res.json({"error":"Debe ingresar solo numeros"});
    }
    if(monto <=0){
        return res.json({"error":"El monto ingresado debe ser mayor a cero"});
    }
    saldo +=  monto ;
    return res.json({"saldo":saldo});

});

router.post('/descontar/saldo',(req,res)=>{
    let monto = req.body.monto;
    if(typeof monto != 'number'){
        return res.json({"error":"Debe ingresar solo numeros"});
    }
    if(monto <= 0 ){
        return res.json({"error":"El monto ingresado debe ser mayor a cero"});
    }
    if(monto >= saldo){
        return res.json({"error":"El monto ingresado no debe ser mayor al saldo"});
    }
    saldo -= monto;
    return res.json({"saldo":saldo});
});


router.get('/movimiento/saldo',(req,res)=>{

});


module.exports = router;