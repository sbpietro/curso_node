module.exports = (app) => {

    app.get('/noticia', (req, res) => {
        var conn = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conn, (error, result) => {
            res.render('noticias/noticia', {noticia: result});
        });
    });

};