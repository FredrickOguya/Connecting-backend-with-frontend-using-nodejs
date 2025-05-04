require("dotenv").config(); //load environment variables

const express = require("express"); //Import Express framework
const cors = require("cors") //Import CORS middleware

const app = express(); //Initialize an express application

app.use(express.json()); //Enable JSON data processing
app.use(cors()); // Enable cross-origin requests

//start a server on port 5002
app.listen(5002, () => {
    console.log("Connection was successfull");
});

