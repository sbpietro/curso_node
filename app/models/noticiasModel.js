module.exports = () => {

    this.getNoticias = (conn, callback) => {
        conn.query('select * from noticias', callback);
    };

    this.getNoticia = (conn, callback) => {
        conn.query('select * from noticias where id = 2', callback);
    };
    
    return this;
}