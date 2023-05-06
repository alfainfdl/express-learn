const mysql = require('mysql')
const env = require('dotenv')

env.config()

const db = mysql.createConnection({
    host : process.env.DB_HOSTNAME,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})

db.connect((err) => {
    if(err) {
        console.log('error', err);
    }
    console.log('db connected');
})

module.exports = db