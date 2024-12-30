const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'user', // Replace with your MySQL password
    database: 'portfolio',
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
    res.send('Welcome to Bhoomika Sahu’s Portfolio Server!');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
        } else {
            res.send('Message saved');
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
