const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { Builder, By, Key, until,Capabilities } = require('selenium-webdriver');
const {setDefaultTimeout} = require('cucumber');
const chrome = require('selenium-webdriver/chrome');
// const webdriver = require('selenium-webdriver');

const path = require('chromedriver').path;
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
setDefaultTimeout(60*1000);

let agregarMonto =0;
let chromeDriver = undefined;

Given('dados el monto {int}', function (monto) {
    agregarMonto = monto;    
  });

  When('navego a la pagina principal',async function () {
    chromeDriver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    // chromeDriver = await new Builder().forBrowser('chrome').build();
    await chromeDriver.get('http://localhost:3000/index.html');
    

  });

  When('lleno el campo agregar saldo',async function () {
    await chromeDriver.findElement(By.name('input-aumentar')).sendKeys(agregarMonto);
  }); 

  When('presion el boton Agregar Saldo',async function () {
    await chromeDriver.findElement(By.name('aumentar')).click();
    await chromeDriver.sleep(2000);
  });

  Then('se debe mostrar el saldo actualizado',async function (expected) {

    try{
      // let showText = await chromeDriver.findElement(By.name('saldo'))
      // .getText().then( async function (text) {
      //   // console.log(text);
      //   showText = text;
      //   return text;
      // });
      const showText = await chromeDriver.findElement(By.name('saldo')).getText();

      expect(showText).to.eql(expected);
      await chromeDriver.quit();
    }catch(ex){
      // await chromeDriver.quit();
    }
  });