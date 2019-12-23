const express = require("express");
const path = require("path");


const app = express();
const router = express.Router();


app.use(express.urlencoded({ extended:true}));
app.use(express.json());









router.get("/survey", function(req, res){
    console.log(`SURVEY PAGE SENT`);
    console.log("\n");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    res.sendFile(path.join(__dirname,"../public/style.css"));
    // res.send("SURVEY");

});


router.get("*", function(req, res){
    console.log(`HOMEPAGE SENT`);
    console.log("\n");
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.send("HOME");

});





module.exports = router;