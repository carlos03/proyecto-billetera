const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { Builder, By, Key, until,Capabilities } = require('selenium-webdriver');
const {setDefaultTimeout} = require('cucumber');
const chrome = require('selenium-webdriver/chrome');

const path = require('chromedriver').path;
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
setDefaultTimeout(60*1000);

let agregarMonto =0;
let saldoActual = undefined;
let chromeDriver = undefined;

  Given('dados el monto {int}', function (monto) {
    agregarMonto = monto;    
  });

  When('navego a la pagina principal',async function () {
    chromeDriver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await chromeDriver.get('http://localhost:3000/index.html');
  });

  When('verifico el saldo actual sea mayor a cero', async function () {
    const saldo = await chromeDriver.findElement(By.name('saldo')).getText();
    saldoActual = parseInt(saldo);
  });

  When('lleno el campo agregar saldo con un monto mayor a cero',async function () {
    await chromeDriver.findElement(By.name('input-aumentar')).sendKeys(agregarMonto);
  }); 

  Then('presino el boton Agregar Saldo',async function () {
    await chromeDriver.findElement(By.name('aumentar')).click();
    await chromeDriver.sleep(2000);
  });

  Then('se debe mostrar el saldo monto mas el saldo actual',async function () {

    try{
      const showText = await chromeDriver.findElement(By.name('saldo')).getText();
      expect(showText).to.eql(saldoActual+agregarMonto);
      await chromeDriver.quit();
    }catch(ex){
      await chromeDriver.quit();
    }
  });