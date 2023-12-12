const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // res.status(200).send("Hello from the server\n")
    res.status(200).json( {name: "Asad", age: 18} )
    // res.status(200).end("\n<h1> This is h1 </h1>")
})


app.listen(8000, () => {
    console.log("server has started")
})