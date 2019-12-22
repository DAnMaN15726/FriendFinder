const express = require("express");
const path = require("path");

const app = express();


app.use(express.urlencoded({ extended:true}));
app.use(express.json());









app.get("/api/friends", function(req, res){
    console.log(`JSON LOADING`);


});


app.post("/api/friends", function(req, res){

    

});