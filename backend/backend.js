const express = require('express');
const app = express();
const fs = require('fs')

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
        
        await page.goto("https://blog.logrocket.com/build-server-rendered-react-app-next-express/");
        await page.waitForTimeout(5000);    
        const pdf = await page.pdf({ format: 'A4', path: "xx.pdf"});
        browser.close()
        return pdf
        //await page.screenshot({path: 'xx.pdf'});
            
        res.send("Test CV");
            
        
    }
    run()
});