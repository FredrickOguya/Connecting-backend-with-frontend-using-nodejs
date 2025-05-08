const express = require('express');
const app = express();
const PORT = 5000;

app.use(express(express.json())); // allows Express to parse JSON bodies

