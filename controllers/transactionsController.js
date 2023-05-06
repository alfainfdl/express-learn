const db = require( '../config/connection' )

exports.getTransactions = async() => {
    const query = await db.query("SELECT * FROM transactions")
    return query
}

exports.createTransactions = async(data, products) => {
    const query = await db.query('INSERT INTO transactions SET ?', [data]).catch( err => {return err})

    if(!query.affectedRows) return query.message
    
    let dataProduct = []
    products.map( item => {
        dataProduct.push([
            data.no_order,
            item.id,
            item.quantity
        ])
    })
    const queryDetail = await db.query('INSERT INTO transaction_detail (no_order, id_product, quantity) VALUES ?', [dataProduct])
    const dataOrder = await db.query('SELECT * FROM transactions WHERE no_order = ?', [data.no_order])
    
    //decrease stock
    for(i = 0; i < dataProduct.length; i++)
    {
        await db.query('UPDATE products SET stock = stock-? WHERE id=?', [dataProduct[i][quantity], dataProduct[i][id]])
    }

    return dataOrder
}