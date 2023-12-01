const mysql  = require('mysql');

const connection = mysql.createConnection({
    host:'cositas.ddns.net',
    user:'hera',
    password:'#Heba990917',
    database:'cositas',

});

connection.connect((err) => {
    if(err){
        console.error('MySql Error:' + err);
    }
    else{
        console.log('Conecta2');
    }
});

module.exports = connection;