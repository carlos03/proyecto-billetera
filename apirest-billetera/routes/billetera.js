var express = require('express');
var router = express.Router();

var saldo = 100;

router.post('/agregar/saldo',(req,res)=>{
    let monto = req.body.monto;
    if(monto instanceof Number){
        saldo += monto ;
        res.status(200).json({
            monto  : saldo
    
        });
    }else{
        res.send("Debe ingresar solo numeros");
    }

});

router.get('/prueba',(req,res)=>{
    res.send("hola mundo");
})

module.exports = router;