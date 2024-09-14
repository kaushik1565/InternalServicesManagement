const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database: "srvDB"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Routes
// Create a new student
app.post('/student', (req, res) => {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>"${req.body}`)
    let student = { name: req.body.name, contact_no: req.body.contact, email: req.body.email, pincode: req.body.pin };
    let sql = 'INSERT INTO tbl_Services SET ?';
    db.query(sql, student, (err, result) => {
        if (err) throw err;
        res.send('Product added...');
    });
});

// Get all student
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM tbl_user';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get a single user by ID
app.get('/user/:id', (req, res) => {
    let sql = `SELECT * FROM tbl_user WHERE id = ${req.params.id} `;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update a user
app.put('/service/:id', (req, res) => {
    let newUser = { name: req.body.name, email: req.body.email };
    let sql = `UPDATE tbl_Services SET ? WHERE id = ${req.params.id}`;
    db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        res.send('User updated...');
    });
});

// Delete a user
app.delete('/student/:id', (req, res) => {
    let sql = `DELETE FROM tbl_students WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('User deleted...');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});