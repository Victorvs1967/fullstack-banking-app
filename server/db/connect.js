const { Pool } = require('pg');

const pool = new Pool({
    user: 'victors',
    password: 'victor77',
    host: 'localhost',
    port: 5432,
    database: 'bank_account'
});

module.exports = { pool };