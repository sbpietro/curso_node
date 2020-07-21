module.exports = function(app){

    app.get('/noticias', function(req, res){
        var conn = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(conn, function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
        
    });

};

