const express = require('express');
const transactions = express.Router();
const response = require('../response');
const { getTransactions } = require('../controllers/transactionsController')
const { randomOrderNumber } = require('../helpers/utils')

transactions.route('/').get(async (req, res) => {
    const trxList = await getTransactions()
    response(200, "success", trxList, res)
})

transactions.route('/').post(async (req, res) => {
    const { total_price, paid_amount, products } = req.body
    const data = {
        no_order : randomOrderNumber(), total_price, paid_amount, products
    }
    
    const create = await createTransactions(data)
    response(200, "success", create, res)
})

module.exports = transactions;