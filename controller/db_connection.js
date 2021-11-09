var mysql = require('mysql');
require('dotenv').config()
class DBConnection {
    constructor() {
        this.db = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });

        this.checkConnection();
    }
    checkConnection() {
        this.db.getConnection((err, connection) => {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed.');
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections.');
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused.');
                }
            }
            if (connection) {
                connection.release();
            }
            return;
        });
    }
    query = async(sql, values) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                }
                // execute will internally call prepare and query
            this.db.query(sql, values, callback);
        }).catch(err => {
         

            throw err;
        });
    }
}
module.exports = new DBConnection().query;