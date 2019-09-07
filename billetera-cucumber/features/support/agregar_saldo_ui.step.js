const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const { Builder, By, Key, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const webdriver = require('selenium-webdriver');

// const path = require('chromedriver').path;
// let service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);


let agregarMonto =0;
let chromeDriver = undefined;

Given('dados el monto {int}', function (monto) {
    agregarMonto = monto;    
  });

  When('navego a la pagina principal',async function () {
    // chromeDriver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    chromeDriver = await new Builder().forBrowser('chrome').build();
    await chromeDriver.get('http://localhost:3000/index.html');

  });

  When('lleno el campo agregar saldo',async function () {
    await chromeDriver.findElement(By.name('input-aumentar')).sendKeys(agregarMonto);
  }); 

  When('presion el boton Agregar Saldo',async function () {
    await chromeDriver.findElement(By.name('aumentar')).click();
  });

  Then('se debe mostrar el saldo actualizado',async function (expected) {
    await chromeDriver.findElement(By.name('saldo'))
    .getText().then(function (text) {
      showText = text;
    });

  expect(showText).to.eql(expected);
  await chromeDriver.quit();
  });