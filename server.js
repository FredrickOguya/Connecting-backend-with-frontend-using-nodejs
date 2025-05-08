const express = require('express');
const app = express();
const PORT = 5000;

app.use(express(express.json())); // allows Express to parse JSON bodies

// Route to handle data submission (POST request)
app.post('/submit', (req,res)=> {
    const receivedData = req.body;
    console.log('Data received:', receivedData);
    res.json({message: 'Data received successfully'})
});