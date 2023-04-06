const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
});

// Route for displaying the data in a table format
app.get('/customers', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // Get the data from the MySQL database
    pool.query('SELECT * FROM sql_store.customers', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/invoices', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // Get the data from the MySQL database
    pool.query('SELECT * FROM sql_invoicing.invoices', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/employees', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // Get the data from the MySQL database
    pool.query('SELECT * FROM sql_hr.employees', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
