const mysql = require('mysql2');

//create a connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QsxfThm,1',
    database: 'SIGNUP'
});

//connect to MYSQL
db.connect((err)=> {
    if(err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MYSQL database');
});

module.exports = db;