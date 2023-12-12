const express = require("express");
const fs = require("fs");
const app = express();

const movies = JSON.parse(fs.readFileSync("../files/movies.json", "utf-8"))

app.get("/api/v1/movies", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            movies,
        }
    })
})

/*
            Handling Route params: These are dynamic parameters. 
Like /api/v1/movies/:id/:name? (Here id can be 1, 2 AND name can be Asad, Junaid etc. Name is optional route param here)
and we access them using req.params object (like for id -> req.params.id and for name -> req.params.name)
*/

// GET MOVIE BY ID when requesting -> /api/v1/movies/:id
app.get("/api/v1/movies/:id", (req, res) => {
    const id = +req.params.id;   // To convert the obtained id into Number. Same as Number(req.params.id)
    const movie = movies.find(movie => movie.id === id);
    console.log(`id: ${id}`);
    if(movie) {
        res.status(200).json({
            status: "success",
            data: {
                movie,
            }
        })
    } else {
        res.status(404).json({
            status: "failed",
            data: {
                movie,
            }
        })
    }
    
});


app.listen(8000, () => {
    console.log("server has started");
})