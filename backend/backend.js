const express = require('express');
const app = express();

const port = 9000;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()


const puppeteer = require("puppeteer-extra");
const {executablePath} = require('puppeteer')
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const cors = require('cors');
app.use(cors());


/* (async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    headless:true,
    executablePath: executablePath()
})
  const page = await browser.newPage();
  
  await page.goto('https://www.youtube.com/', {
    waitUntil: 'networkidle2'
  });
  
  await page.pdf({
      path: 'lcs.pdf',
      format: 'a4',
  });
  
  await browser.close();
})(); */



app.get("/cv",cors(), function(req, res) {
    async function run(){    
      const browser = await puppeteer.launch({ headless:true,
        executablePath: executablePath()});
      const page = await browser.newPage();
      
      await page.goto('http://localhost:3000', {
          waitUntil: 'networkidle2'
      });        
      const pdf = await page.pdf({
          path: 'test.pdf',
          format: 'a4',
          printBackground: true,
          scale: 1,
      });
      
      await browser.close();
      
      res.contentType("application/pdf");
      res.send(pdf);
    }
    run()

});