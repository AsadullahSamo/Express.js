const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.static("../public"));      // Used to serve statuc files, html, css, images etc
// All files inside the public directory will now be served
// Type localhost:8000/templates/demo.html        (To see the served html file)

app.get("/", (req, res) => {	});

app.listen(PORT, () => console.log("Server running on port " + PORT));