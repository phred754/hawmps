require('dotenv').config();

const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

var mysql = require('mysql'); 

var pool = mysql.createPool({
  connectionLimit: process.env.DB_CONN_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

// place holder for the data
// const users = [];
const crew = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   user.id = randomId(10);
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

app.get('/api/crew', (req, res) => {
    var sql = ` SELECT 
                  id, 
                  coalesce(full_name, first_name) AS fullName, 
                  gender 
                FROM crew
                WHERE full_name LIKE ${mysql.escape('%' + req.query.searchCriteria + '%')} 
                LIMIT 1000;`;
    console.log(sql);
    
    pool.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});