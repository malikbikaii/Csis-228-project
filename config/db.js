const database = require("mariadb");
require('dotenv').config();

const pool = database.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

// Test database connection
pool.getConnection()
    .then(conn => {
        console.log('Database connected successfully!');
        conn.release(); // Release the connection back to the pool
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

module.exports = pool;
