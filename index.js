const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const query = "SELECT * FROM item"
    db.query(query, (error, result) => {
        response(200, "success", result, res)
    })
})

app.get('/byid', (req, res) => {
    const sql = `SELECT * FROM item WHERE item_id = ${req.query.id}`
    db.query(sql, (error, result) => {
        if(result == [])
            response(500, "Data Not Found", result, res)
        else
            response(200, "success", result, res)
    })
})

app.post('/login', (req, res) => {
    console.log({ params: req.body })
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
