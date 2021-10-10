require('dotenv').config();

const express = require('express');
const path = require('path');
//const randomId = require('random-id');
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
// const crew = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/api/users', (req, res) => {
//   console.log('api/users called!!!!!!!')
//   res.json(users);
// });

app.get('/api/crew', (req, res) => {
    var sql = ` SELECT 
                  id, 
                  coalesce(full_name, first_name) AS fullName, 
                  gender 
                FROM crew
                WHERE full_name LIKE ${mysql.escape('%' + req.query.searchCriteria + '%')} 
                LIMIT 1000;`;

    pool.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

app.get('/api/member', (req, res) => {
  var sql = ` SELECT 
                COALESCE (full_name, first_name) AS fullName,
                r.role_name AS role,
                cr.role_data AS roleInfo
              FROM crew c 
                JOIN crew_roles cr on c.id = cr.crew_id 
                JOIN roles r on r.id = cr.role_id 
              WHERE c.id = ${mysql.escape(req.query.id)};`;
  
  pool.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});