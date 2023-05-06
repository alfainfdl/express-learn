const express = require('express');
const db = require('../config/connection');
const products = express.Router();
const response = require('../response');

products.route('/getProducts').get(async (req, res) => {
    const query = "SELECT * FROM products"
    await db.query(query, (error, result) => {
        response(200, "success", result, res)
    })
})

products.route('/getProduct').get(async (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.query.id}`
    db.query(sql, (error, result) => {
        if(result == [])
            response(500, "Data Not Found", result, res)
        else
            response(200, "success", result, res)
    })
})

products.route('/').post(async (req, res) => {
    const { name, price, stock } = req.body
    let data = {
        name, price, stock
    }

    const insProduct = await db.query('insert into products set ?', [data])

    res.send('success created')
})

module.exports = products;