# MÓDULO 3 – PRUEBAS DE SOFTWARE – QTESTING
## Poryecto Final
Proyecto final modulo 3 implementacion de todos los niveles de prueba en el diagrama piramidal


### Descripcion de las Tecnologias utilizadas

Para el desarrolo del siguiente proyecto se utilizaron las siguintes tecnologias

* [node.js] - para el backend
* [Express] - marco de aplicacion web para node
* [jQuery] - para las peticiones en UI

### Directorios del proyecto
| Nombre | Directorio |
| ------ | ------ |
| apirest-billetera | /proyecto-billetera/apirest-billetera/ |
| billetera-cucumber | /proyecto-billetera/billetera-cucumber/ |

* *apirest-billetera*
        Contiene las api implementas, las pruebas unitarias y un index.html 
* *billetera-cucumber*
        Contiene las dos pruebas de integracion y una de UI.

### Instalacion servicio rest y UI
Ingrese al directorio y ejecute el siguiente comando para ejecutar el servicio. 
```sh
cd /proyecto-billetera/apirest-billetera/
npm install
npm start
```
Luego en su navegador ingrese la siguiente direccion para visualizar el UI de la aplicacion
```sh
http://localhost:3000/
```

### Ejecutar Test del servicio rest

Para ejecutar las pruebas de los servicio 
Iingrese en el siguiente directorio
```sh
cd /proyecto-billetera/apirest-billetera/
```
Ejecute
```sh
npm test
```

### Instalar y ejecutar cucumber js

Para instalar cucumber ingrese en el siguiente directorio y ejecute los siguientes comandos
```sh
cd /proyecto-billetera/billetera-cucumber/
npm install
./node_modules/.bin/cucumber-js
```


[node.js]: <http://nodejs.org>
[jQuery]: <http://jquery.com>
[express]: <http://expressjs.com>