Feature: Agregar saldo 

   Como Cliente  de API WEB (no humano) 
   realizo una peticion para agregar saldo

   Scenario: Agrego saldo
   Given el saldo 876 And el monto Bs. 100
   When preparo el JSON para la peticion
   Then realizo la peticion POST a la url para agregar saldo
   Then recibo el resultado 976
