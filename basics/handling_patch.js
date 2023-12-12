// PATCH is same as PUT with only difference is that "PATCH updates only modified changes while PUT updates entire object"req.params.id
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.json());

let movies = JSON.parse(fs.readFileSync("../files/movies.json", "utf-8"))

app.patch("/api/v1/movies/:id", (req, res) => {
    const id = +req.params.id;      // Convert id to Number
    let movieToUpdate = movies.find(movie => movie.id === id)
    
    if(movieToUpdate) {
        const updatedMovieObject = Object.assign(movieToUpdate, req.body)
        let index = movies.indexOf(movieToUpdate)
        movies[index] = updatedMovieObject;
        console.log(movies);

        fs.writeFile("../files/movies.json", JSON.stringify(movies), (err) => {
            if(err) throw err
            else console.log("Updated successfully");
        })

    } else {
        res.status(404).json({
            status: "failed",
            message: `Movie with id ${id} not found`
        })
    }
    
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
