const express = require("express");

const app = express();

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/views/index.html");
});

//about route
app.get("/about", (req, res) =>
{
    res.sendFile(__dirname + "/views/about.html");
})

//blog route
app.get("/blog", (req, res) =>
{
    res.sendFile(__dirname + "/views/blog-directory.html");
})

//listen to port 8000
app.listen(8000, () =>
{
    console.log("Listening to port 8000");
})