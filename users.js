const express = require('express');
const router = express.Router();
const db = require('./db');


// Get all users
router.get('/',async (req,res)=>{
    const [rows] =await db.query('SELECT * FROM users');
    res.json(rows);
});

// Get user by ID

router.get('/:id', async (req,res) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
});
