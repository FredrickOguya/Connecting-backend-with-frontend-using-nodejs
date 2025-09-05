const express = require('express');

const app = express()
const PORT = 5000;

app.use(express.json())

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QsxfThm,1',
    database: 'SIGNUP'
});

db.connect((err)=>{
    if(err){
       console.error('Error connecting to MySQL:' ,err);
        return; 
    }
    console.log('Connected to MySQL');
});

app.post('/submit', (req,res)=>{
    const {name,age} = req.body;
    const query = 'INSERT INTO users (name, age) VALUES (?, ?)';

    
    db.query(query, [name,age], (err,result) => {
        if(err){
            return res.status(500).json({err: 'Failed to insert data'});
        }
        res.json({message: 'User saved successfully!'});
    });
});

//retrieving data

app.get('/data', (req,res)=>{
    db.query('SELECT * FROM users',(err,results)=>{
        if(err) {
            return res.status(500).json({error: 'Failed to fetch users'})
        }
        res.json(results)
    })
})