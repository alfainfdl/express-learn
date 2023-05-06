const db = require( '../config/connection' )

exports.getTransactions = async() => {
    const query = await db.query("SELECT * FROM transactions")
    return query
}

exports.createTransactions = async(data) => {
    const query = await db.query('INSERT INTO transactions SET ?', [data]).catch( err => {
        return err
    })

    if(!query.affectedRows) return query.message

    return "transaction created"
}