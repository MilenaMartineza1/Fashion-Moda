const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',        
    user: 'root',       
    password: '12005Ma#',
    database: 'fashionmoda'    
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
