const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'arc_db',
    host: 'localhost',
    port: '3306'
});

let arc_db = {};

arc_db.all = () => {
    return new Promise((resolve, reject) =>{
        pool.query(`SELECT * FROM arc_cmd_table`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        }); 
    });
};

module.exports = arc_db;
