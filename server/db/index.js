const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
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

arc_db.one = (id) => {
    return new Promise((resolve, reject) =>{
        pool.query(`SELECT * FROM ? WHERE cmd_id = 1`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        }); 
    });
};

module.exports = arc_db;
