const express = require("express");
const path = require("path");
// const route = require("./app/routing/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());


app.use(require("./app/routing/apiRoutes.js"));
app.use(require("./app/routing/htmlRoutes.js"));














app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});