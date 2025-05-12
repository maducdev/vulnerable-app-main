const express = require('express');
const app = express();
const mysql = require('mysql');
const exec = require('child_process').exec;

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: 'root',
    password: 'password123',
    database: 'vulnerable_db'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    db.connect((err) => {
        if (err) {
            console.error('Unable to connect to the database:', err.message);
        } else {
            console.log('Database connected successfully!');
        }
    });
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    console.log(`Executing Query: ${query}`);
    db.query(query, (err, result) => {
        res.json(result);
    });
});

app.get('/ping', (req, res) => {
    const host = req.query.host;
    console.log('Attempting to ping:', host);

    // Check if host is provided
    if (!host) {
        return res.status(400).send('Host parameter is required');
    }

    // For Windows use 'ping -n 4' instead of 'ping -c 4'
    const pingCommand = process.platform === 'win32' 
        ? `ping -n 4 ${host}`
        : `ping -c 4 ${host}`;

    exec(pingCommand, (error, stdout, stderr) => {

        if (error) {
            return res.status(500).send(`Error executing ping: ${error.message}`);
        }
        if (stderr) {
            return res.status(500).send(`Stderr: ${stderr}`);
        }
        res.send(stdout);
    });
});

app.get('/profile', (req, res) => {
    const userInput = req.query.name;
    res.send(`<h1>Welcome ${userInput}!</h1>`);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});