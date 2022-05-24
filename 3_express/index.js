const express = require("express"); //importando o express
const app = express(); //iniciando o express


app.get("/", function(req, res){
    res.send("Bem vindo ao guia do programador.");
    //sempre responder ao usuário para não manter o localhost
    //aguardando resposta.
    //só pode enviar resposta uma única vez.
});

//PARAMETRO OPCIONAL
app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }
    else{
        res.send("Bem vindo ao meu blog.");
    }
});

//PARAMETRO OBRIGATORIO
app.get("/ola/:nome/:empresa", function(req, res){
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1> Olá "+ nome + " do " + empresa + "!</h1>");
});

 //QUERY PARAMS
app.get("/canal/youtube", function(req, res){

    var canal = req.query["canal"]; 

    if (canal){
        res.send(canal);
    }
    else{
        res.send("Nenhum canal fornecido!");
    }
});


app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }
    else{
        console.log("Servidor iniciado com sucesso!");
    }
})