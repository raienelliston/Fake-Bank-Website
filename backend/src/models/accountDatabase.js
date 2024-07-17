const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'bank',
    password: 'password',
    port: 5432,
})

const getAccounts = () => {
    pool.query('SELECT * FROM account ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        return results.rows
    })
}

const getAccountById = (request) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM account WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        return results.rows
    })
}

const createAccount = (request) => {
    const { name, balance } = request.body

    pool.query('INSERT INTO account (name, balance) VALUES ($1, $2)', [name, balance], (error, results) => {
        if (error) {
            throw error
            return false
        }
        return true
    })
}

const updateAccount = (request) => {
    const id = parseInt(request.params.id)
    const { name, balance } = request.body

    pool.query(
        'UPDATE account SET name = $1, balance = $2 WHERE id = $3', [name, balance, id], (error, results) => {
            if (error) {
                throw error
                return false
            }
            return true
        }
    )
}

module.exports = {
    getAccounts,
    getAccountById,
    createAccount,
    updateAccount,
}