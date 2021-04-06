const Pool = require('pg').Pool
const ev = require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USERID,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL
});

module.exports = pool;