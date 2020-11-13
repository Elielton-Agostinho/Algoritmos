const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//Página Números primos
app.get('/', (req, res) => {
    res.render('pages/primo')
})

//Página Somatório
app.get('/somatorio', (req, res) => {
    res.render('pages/somatorio')
})

//Página Somatório
app.get('/fib', (req, res) => {
    res.render('pages/fibonacci')
})

//Página Mdc
app.get('/mdc', (req, res) => {
    res.render('pages/mdc')
})

//Ordenação de Array
app.get('/ordenacao', (req, res) => {
    res.render('pages/ordenacao')
})

//Contagem
app.get('/contagem', (req, res) => {
    res.render('pages/contagem')
})

app.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})