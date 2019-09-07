const { setWorldConstructor } = require("cucumber");

class AgregarSaldoWorld {
    constructor() {
      this.montoAgregar = 0;
      this.respuesta = undefined;
    };
  
    setToMonto(monto) {
      this.montoAgregar = monto;
    }
  
    setToRespuesta(response){
        this.respuesta = response;
    }
    
  }
  
  setWorldConstructor(AgregarSaldoWorld);