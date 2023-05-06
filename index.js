const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./config/connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/getProducts', (req, res) => {
    const query = "SELECT * FROM products"
    db.query(query, (error, result) => {
        response(200, "success", result, res)
    })
})

app.get('/getProduct', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.query.id}`
    db.query(sql, (error, result) => {
        if(result == [])
            response(500, "Data Not Found", result, res)
        else
            response(200, "success", result, res)
    })
})

app.post('/createProduct', (req, res) => {
    console.log( req.body )
    res.send('post test')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
