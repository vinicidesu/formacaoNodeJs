// HTTP:
// - Protocolo de tranferência de dados na WEB.
// - Requisição(usuário) -> HTTP <- Resposta(servidor)

var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>www.guiadoprogramador.com.br</h4>");
}).listen(25565);