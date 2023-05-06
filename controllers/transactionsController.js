const db = require( '../config/connection' )

exports.createTransactions = async(data) => {
    const query = await db.query('INSERT INTO transactions SET ?', [data])
    if(!query.affectedRows) return query.message

    return "product created"
}