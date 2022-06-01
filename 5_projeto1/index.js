const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require('./database/Pergunta');

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados.")
    })
    .catch((msgErro) => {
        console.log("Erro");
    })

//Express
app.set('view engine', 'ejs');
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req,res) => {
    Pergunta.findAll({ raw: true}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });
    
});

app.get("/perguntar", (req,res) => {
    res.render("perguntar");
});

//Salvando perguntas no banco de dados
app.post("/salvarpergunta", (req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(8080, ()=>{
    console.log("App rodando.");
});