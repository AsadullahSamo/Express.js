const express = require("express");
const fs = require("fs")
const app = express();
const PORT = 8000;

let movies = JSON.parse(fs.readFileSync("../files/movies.json", "utf-8"));

app.use(express.json());

app.delete("/api/v1/movies/:id", (req, res) => {
    const id = +req.params.id
    movies = movies.filter(movie => movie.id !== id);

    fs.writeFile("../files/movies.json", JSON.stringify(movies), (err) => {
        if(err) throw err
        else console.log("Movie deleted successfully");
    })
});



app.listen(PORT, () => console.log("Server running on port " + PORT));