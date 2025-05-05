require("dotenv").config(); //load environment variables

const express = require("express"); //Import Express framework
const cors = require("cors") //Import CORS middleware

const app = express(); //Initialize an express application
78
app.use(express.json()); //Enable JSON data processing
app.use(cors()); // Enable cross-origin requests

//start a server on port 5002
app.listen(5002, () => {
    console.log("Connection was successfull");
});

app.get("/", (req,res) => {
    res.send("Fred is here");
});

app.get("/welcome", (req,res)=>{
    res.send("Welcome to my API");
});

app.get("/test", (req,res) => {
    res.send("This is a test route");
});

app.get("/date", (req,res) => {
    res.send(`Today's date is ${new Date().toDateString()}`);
});

app.get("/test", (req,res)=>{
    res.send("This is a test route")
});

app.get("/date", (req,res)=>{
    res.send(`Todays date is ${new Date().toDateString()}`)
})