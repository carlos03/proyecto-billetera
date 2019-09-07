const { setWorldConstructor } = require("cucumber");

class DescontarSaldoWorld {
    constructor() {
      this.montoDescuento = 0;
      this.mensajeError = undefined;
      this.code = undefined;
    };
  
    setToMonto(monto) {
      this.montoDescuento = monto;
    }
  
    setToMensajeError(mensaje){
        this.mensajeError = mensaje;
    }

    setCode(code){
        this.code=code;
    }
    
  }
  
  setWorldConstructor(DescontarSaldoWorld);