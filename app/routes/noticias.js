var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    var conn = dbConnection();
    app.get('/noticias', function(req, res){
        conn.query('select * from noticias', function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
}

