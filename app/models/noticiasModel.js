module.exports = () => {

    this.getNoticias = (conn, callback) => {
        conn.query('select * from noticias', callback);
    };

    this.getNoticia = (conn, callback) => {
        conn.query('select * from noticias where id = 2', callback);
    };

    this.salvarNoticia = (noticia, conn, callback) => {
        conn.query('insert into noticias set ?', noticia, callback);
    };
    
    return this;
}