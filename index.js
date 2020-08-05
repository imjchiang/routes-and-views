const express = require("express");

const app = express();

//tell express we are going to use ejs as the view engine
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) =>
{
    //express will look inside views folder by default for an ejs file with this name
    res.render("index");
    //res.sendFile(__dirname + "/views/index.html");
});

//about route
app.get("/about", (req, res) =>
{
    res.render("about");
    //res.sendFile(__dirname + "/views/about.html");
})

//blog route
app.get("/blog", (req, res) =>
{
    res.render("blog-directory");
    //res.sendFile(__dirname + "/views/blog-directory.html");
})

//listen to port 8000
app.listen(8000, () =>
{
    console.log("Listening to port 8000");
})