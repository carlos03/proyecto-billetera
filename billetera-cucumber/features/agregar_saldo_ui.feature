Feature: Agregar saldo al Saldo Actual
 Como Usuario Final (humano)
 Quiero agregar un monto valido al saldo actual

 Scenario: Se ingresa un monto valido y se suma al saldo actual correctamente
 Given dados el monto 400
 When navego a la pagina principal
 And lleno el campo agregar saldo
 And presion el boton Agregar Saldo
 Then se debe mostrar el saldo actualizado