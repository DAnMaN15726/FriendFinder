const express = require("express");
const path = require("path");


const app = express();
const router = express.Router();


app.use(express.urlencoded({ extended:true}));
app.use(express.json());









router.get("/", function(req, res){
    console.log(`HOMEPAGE SENT`);
    console.log("\n");
    res.sendFile(path.join(__dirname, "../app/public/home.html"));
    res.send("HOME");

});

router.get("/survey", function(req, res){
    console.log(`SURVEY PAGE SENT`);
    console.log("\n");
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    res.send("SURVEY");

});






module.exports = router;