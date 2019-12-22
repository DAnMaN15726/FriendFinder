const express = require("express");
const path = require("path");
const fs = require("fs");

const friends = require("../data/friends.js");

const app = express();


app.use(express.urlencoded({ extended:true}));
app.use(express.json());









app.get("/api/friends", function(req, res){
    console.log(`JSON LOADING`);
    res.json(friends);

});


app.post("/api/friends", function(req, res){
    if (friends.length < 5){
        friends.push(req.body);
        res.json(true);
    }
    else{
        res.json(false);
    }

});






module.exports = app;