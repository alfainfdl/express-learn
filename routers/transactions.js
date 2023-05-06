const express = require('express');
const transactions = express.Router();
const response = require('../helpers/response');
const { getTransactions, createTransactions } = require('../controllers/transactionsController')
const { randomOrderNumber } = require('../helpers/utils')

transactions.route('/').get(async (req, res) => {
    const trxList = await getTransactions()
    response(200, "success", trxList, res)
})

transactions.route('/').post(async (req, res) => {
    const { total_price, paid_amount, products } = req.body
    const order = {
        no_order : randomOrderNumber(), 
        total_price, 
        paid_amount
    }
    
    const create = await createTransactions(order, products)
    response(200, "success", create, res)
})

module.exports = transactions;