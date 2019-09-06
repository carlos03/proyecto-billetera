var express = require('express');
var router = express.Router();

var saldo = 876;

var listaTransaccion = [
    {descripcion: "Ingreso","monto":saldo},
];

router.get('/consultar/saldo',(req,res)=>{
    res.json({"saldo":saldo});

});

router.post('/agregar/saldo',(req,res)=>{
    let monto = parseInt(req.body.monto);
    console.log(req.body);
    if(typeof monto != 'number'){        
        return res.status(400).send({"error":"Debe ingresar solo numeros [0-9]"});
    }
    if(monto <= 0){
        return res.status(400).send({"error":"El monto ingresado debe ser mayor a cero"});
    }
    saldo +=  monto ;
    return res.status(200).json({"saldo":saldo, "descripcion": "Ingreso","monto":monto});

});

router.post('/descontar/saldo',(req,res)=>{
    console.log(req.body);
    let monto = parseInt(req.body.monto);
    // let descripcion = req.body.descripcion;
    if(typeof monto != 'number'){
        return res.status(400).send({"error":"Debe ingresar solo numeros [0-9]"});
    }
    if(monto <= 0 ){
        return res.status(400).send({"error":"El monto ingresado debe ser mayor a cero"});
    }
    if(monto > saldo){
        return res.status(400).send({"error":"El monto ingresado no debe ser mayor al saldo"});
    }
    saldo -= monto;
    return res.status(200).json({"saldo":saldo,"descripcion": "Egreso","monto":monto});
});


router.get('/transacciones/saldo',(req,res)=>{
    res.status(200).json(listaTransaccion)
});


module.exports = router;