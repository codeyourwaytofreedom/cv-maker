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

app.get("/cv",cors(), function(req, res) {
    async function run(){
        const browser = await puppeteer.launch({
            headless:true,
            executablePath: executablePath()
        })
        const page = await browser.newPage()
        
        await page.goto("http://localhost:3000");
        await page.waitForTimeout(5000);    
        
        const comments = await page.$$("#content-text");
        await page.screenshot({path: 'xx.png'});
            
        res.send("Test CV");
            
        browser.close()
    }
    run()

});
