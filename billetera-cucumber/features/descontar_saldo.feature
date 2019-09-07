Feature: Descontar Saldo
   Como cliente de API Web (no humano)
   realizo una peticion POST para descontar del saldo actual

   Scenario: Realizar una peticion POST para descontar el saldo

   Given el saldo es 0 intento descontar el monto Bs. 1000000
   When realizo la peticion POST para descontar el saldo
   Then un mensaje "El monto ingresado no debe ser mayor al saldo"