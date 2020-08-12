const { Pool } = require('pg')

module.exports = new Pool({
    user: "postgres",
    password: "899681",
    host: "localhost",
    port: 5432,
    database: "nilji-prd"
})