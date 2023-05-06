const express = require('express');
const products = express.Router();
const response = require('../response');
const { getProducts, getProduct, createProduct } = require('../controllers/productsController')

products.route('/getProducts').get(async (req, res) => {
    const productList = await getProducts()
    response(200, "success", productList, res)
})

products.route('/getProduct').get(async (req, res) => {
    const productList = await getProduct(req.query.id)
    response(200, "success", productList, res)
})

products.route('/').post(async (req, res) => {
    const { name, price, stock } = req.body
    const data = {
        name, price, stock
    }
    
    const create = await createProduct(data)
    response(200, "success", create, res)
})

module.exports = products;