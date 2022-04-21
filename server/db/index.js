const mysql = require('mysql');

//DB Config! Maybe module it later...
const pool = mysql.createPool({
    connectionLimit : 10,
    password: 'SP_Mit_Krull22',
    user: 'admin',
    host: 'dentest-db.ct5byl3df7ma.us-east-1.rds.amazonaws.com',
    port: '3306',
    database: 'dentest_db'
})

let db = {}

//Calls all Method, to make select requests from DB
db.all = () => {    
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM position`, (err, results) => {

            if(err) return reject(err); //Returns error
        
            return resolve(results); 
        })
    });
};

db.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM position WHERE ID=?`, id, (err, results) => { //With ?,id we fill sql stmt with id; [id] for array
            console.log(id)
            if(err) return reject(err); //Returns error
        
            return resolve(results[0]); 
        })
    });
};

module.exports = db;