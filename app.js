var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de Notícias</body></html>");
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>");
});

app.get('/moda', function(req, res){
    res.send("<html><body>Notícias de moda</body></html>");
});

app.listen(3000, function(){
    console.log("rodando em express")
});