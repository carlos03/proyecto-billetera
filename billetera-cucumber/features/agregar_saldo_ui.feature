Feature: Agregar saldo al Saldo Actual
 Como Usuario Final (humano)
 Quiero agregar un monto valido al saldo actual

 Scenario: Se ingresa un monto valido y se suma al saldo actual correctamente
 Given dados el monto 15
 When navego a la pagina principal
 And verifico el saldo actual sea mayor a cero
 Then lleno el campo agregar saldo con un monto mayor a cero
 And presino el boton Agregar Saldo
 And se debe mostrar el saldo monto mas el saldo actual