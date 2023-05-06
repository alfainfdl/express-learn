const mysql = require('mysql')
const env = require('dotenv')
const util = require('util')

env.config()

const db = mysql.createConnection({
    host : process.env.DB_HOSTNAME,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
})

db.query = util.promisify(db.query).bind(db)

db.connect((err) => {
    if(err) {
        console.log('error ', err);
    }
    console.log('db connected');
})

module.exports = db