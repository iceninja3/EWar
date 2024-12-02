// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3002; // Your server port

// Enable CORS for the React frontend to make requests
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'password', // Replace with your MySQL password
  database: 'users' // Replace with your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example route to fetch data from MySQL
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/combos', (req, res) => {
    db.query('SELECT * FROM users WHERE username="vishal"', (err, results) => {
      if (err) {
        res.status(500).send('Error fetching data');
      } else {
        res.json(results);
      }
    });
  });

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
