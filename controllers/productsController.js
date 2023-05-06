const db = require( '../config/connection' )

exports.getProducts = async() => {
    const query = await db.query("SELECT * FROM products")
    return query
}

exports.getProduct = async(data) => {
    const query = await db.query('SELECT * FROM products WHERE id = ?', [data])
    return query
}

exports.createProduct = async(data) => {
    const query = await db.query('INSERT INTO products SET ?', [data])
    if(!query.affectedRows) return query.message

    return "product created"
}