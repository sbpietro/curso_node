module.exports = function(app){

    app.get('/noticia', function(req, res){
        var conn = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conn, function(error, result){
            res.render('noticias/noticia', {noticia: result});
        });
    });

};