require("dotenv").config(); //load environment variables

const express = require("express"); //Import Express framework
const cors = require("cors") //Import CORS middleware

const app = express(); //Initialize an express application
78
app.use(express.json()); //Enable JSON data processing
app.use(cors()); // Enable cross-origin requests

const logger = (req,res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();//move to the next middleware or route handler
}

const checkTime = (req,res,next) =>{
    const hour = 20;

    if (hour>=6 && hour<= 18){
        next(); //continue to the next function
    } else {
        res.send("Access denied. This API is available between 6 AM - 6 PM only. ");
    }
};

app.use(logger)
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

app.get("/date",checkTime, (req,res) => {
    res.send(`Today's date is ${new Date().toDateString()}`);
});

app.get("/test", (req,res)=>{
    res.send("This is a test route")
});

app.get("/date", (req,res)=>{
    res.send(`Todays date is ${new Date().toDateString()}`)
})