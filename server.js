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

const firebase = require('firebase/app')
require ('firebase/database')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBInwZoq9hNtV3bAVX-U-6G597FE9p8Xw8",
    authDomain: "algoritmos-1b084.firebaseapp.com",
    projectId: "algoritmos-1b084",
    storageBucket: "algoritmos-1b084.appspot.com",
    databaseURL: "https://algoritmos-1b084-default-rtdb.firebaseio.com/",
    messagingSenderId: "881348405405",
    appId: "1:881348405405:web:c0e341bf6db49ce3afcc74",
    measurementId: "G-KF1CMR7C7H"
  };

  firebase.initializeApp(firebaseConfig);
  
app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//Página Principal
app.get('/', (req, res) => {
    console.log("req")
    res.render('pages/home')
})


//Página Números primos
app.get('/primo', (req, res) => {
    res.render('pages/primo',{resLabel:""})
    var postListRef = firebase.database().ref('/');
    postListRef.on("value", function(snapshot) {
        console.log(snapshot.val());
        //qry += snapshot.val();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      
})

//Página Números primos (POST)
app.post('/primo', (req, res) => {
    
    let valor = req.body.inputPrimo 
    let funcao = req.body.funcao 
    let contador=0;
    let x;

    for (x=1;x<=valor;x++) {   
        if (valor%x==0) {
            contador++;
        }
    }
    let resposta;
    if (contador==2)
        //$("#resultPrimo").val("O número "+valor+" É primo") 
        resposta = "O número "+valor+" É primo";
    else 
        //$("#resultPrimo").val("O número "+valor+" Não é primo");
        resposta = "O número "+valor+" Não é primo";

        
    // Get a reference to the database service
    var postListRef = firebase.database().ref('/');
    var newPostRef = postListRef.push();
    newPostRef.set({
        OPERACAO: funcao,
        VALOR_DIGITADO: valor,
        RESPOSTA: resposta
    });

    res.render('pages/primo', {resLabel: resposta});
    
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