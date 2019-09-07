var express = require('express');
var router = express.Router();

var saldoAnterior = 0;
var saldo = 0;

var listaTransaccion = [
    // {descripcion: "Ingreso "+saldo,"monto":saldo},
];

router.get('/consultar/saldo',(req,res)=>{
    return res.status(200).json({saldo: saldo });
});

router.post('/agregar/saldo',(req,res)=>{
    let monto = req.body.monto;
    console.log(monto);
    if(typeof monto != 'number'){ 
        monto = parseInt(req.body.monto);
        if(isNaN(monto)){
            return res.status(400).send({"error":"Debe ingresar solo numeros [0-9]"});
        }
    }

    if(monto <= 0){
        return res.status(400).send({"error":"El monto ingresado debe ser mayor a cero"});
    }
    saldoAnterior = saldo;
    saldo +=  monto ;
    return res.status(200).json({"saldo":saldo,"saldoAnterior":saldoAnterior, "descripcion": "Ingreso "+monto,"monto":monto});

});

router.post('/descontar/saldo',(req,res)=>{
    console.log(req.body);
    let monto = req.body.monto;
    // let descripcion = req.body.descripcion;
    if(typeof monto != 'number'){
        monto = parseInt(req.body.monto);
        if(isNaN(monto)){
            return res.status(400).send({"error":"Debe ingresar solo numeros [0-9]"});
        }
    }
    if(monto <= 0 ){
        return res.status(400).send({"error":"El monto ingresado debe ser mayor a cero"});
    }
    if(monto > saldo){
        console.log("monto mayor a descontar")
        return res.status(400).send({"error":"El monto ingresado no debe ser mayor al saldo"});
    }
    saldoAnterior = saldo;
    saldo -= monto;
    return res.status(200).json({"saldo":saldo,"saldoAnterior":saldoAnterior,"descripcion": "Retiro "+monto,"monto":monto});
});


router.get('/transacciones/saldo',(req,res)=>{
    res.status(200).json(listaTransaccion)
});


module.exports = router;