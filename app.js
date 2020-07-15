var app = require('./config/server');
var getNoticias = require('./app/routes/noticias');
var getHome = require('./app/routes/home');
var getForm = require('./app/routes/formulario_inclusao_noticia');

getNoticias(app);
getHome(app);
getForm(app);

app.listen(3000, function(){
    console.log("rodando no express");
});