Feature: Agregar saldo 

   Como Cliente  de API WEB (no humano) 
   realizo una peticion POST para agregar saldo actual

   Scenario: Agrego saldo
   Given el monto Bs. 11
   When realizo la peticion POST a la url para agregar saldo
   Then recibo un status 200 
