const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'foo',
    database: 'lucidity',
    password: 'bar'
});

module.exports = pool.promise();