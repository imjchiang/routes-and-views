const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(8000, () =>
{
    console.log("Listening to port 8000");
})