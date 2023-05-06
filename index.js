const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/connection')
const response = require('./response')

app.use(cors())
app.use(bodyParser.json())

const products = require('./routers/products')

app.use('/products', products)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
