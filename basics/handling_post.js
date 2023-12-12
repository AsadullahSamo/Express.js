const { log } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()) //  A middleware to attach req body to req object

const movies = JSON.parse(fs.readFileSync("../files/movies.json", "utf-8"));

app.post("/api/v1/movies", (req, res) => {
    console.log(req.body);
    console.log("Created");

    const id = movies[movies.length - 1].id + 1
    const newMovie = {id: id, ...req.body}

    movies.push(newMovie)

    fs.writeFile("../files/movies.json", JSON.stringify(movies), (err) => {
        if(err) throw err
        console.log("Movie added successfully");
    })
})


app.get("/api/v1/movies", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            movies,
        }
    })
})

app.listen(8000, () => console.log("Server has started"))