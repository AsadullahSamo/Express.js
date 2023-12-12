const express = require("express");
const app = express();

const fs = require("fs")
const morgan = require("morgan")
const PORT = 8000;

app.use(express.json());
app.use(morgan("dev"))      // Also tiny, long etc (all are used for getting response formatting and information)

const movies = JSON.parse(fs.readFileSync("../files/movies.json", "utf-8"))

app.get("/api/v1/movies", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            movies,
        }
    })
})


app.listen(PORT, () => console.log("Server running on port " + PORT));