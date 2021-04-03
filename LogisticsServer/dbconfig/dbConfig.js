const Pool = require('pg').Pool

const pool = new Pool({
    user: "logisticsapp@logistics-db",
    host: "logistics-db.postgres.database.azure.com",
    database: "logisticsdb",
    password: "brightrace",
    port: "5432",
    ssl: true
})

module.exports = pool;