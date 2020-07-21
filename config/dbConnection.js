var mysql = require('mysql');

var conn = () => {
    console.log('conectado no banco');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'stefano',
        database: 'portalnoticias'
    });
}

module.exports = () => {
    return conn;
};