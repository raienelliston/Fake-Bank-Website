const Pool = require('pg').Pool
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

async function createAccountTable() {
    pool.query('CREATE TABLE IF NOT EXISTS account (id SERIAL PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), balance INT)', (error, results) => {
        if (error) {
            throw error
        }
    })
}

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

createAccountTable()

module.exports = {
    getAccounts,
    getAccountById,
    createAccount,
    updateAccount,
}