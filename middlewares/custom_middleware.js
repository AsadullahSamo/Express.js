const express = require("express");
const app = express();
const PORT = 8000;

function logger(req, res, next) {       // All middlewares should have req, res and next() method at the end to execute next middleware
    console.log("Custom middleware executed");
    next();
}

app.use(express.json());    // We use parenthese after middleware func when working with built-in middleware


app.get("/api", (req, res) => {	
    console.log("/api route executed");
});

app.use(logger);    // No don't use () after middleware func when working with custom middleware
// This logger will be executed for all routes defined after it(e.g. /api/v1, and /api/v1/movies and so)
// except the routes defined before it (/api in this case)
app.get("/api/v1", (req, res) => {	
    console.log("/api/v1 route executed");
});
app.get("/api/v1/movies", (req, res) => {	
    console.log("/api/v1/movies route executed");
});



app.listen(PORT, () => console.log("Server running on port " + PORT));