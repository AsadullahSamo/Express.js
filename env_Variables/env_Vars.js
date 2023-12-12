// Useful for different environments like development and production 
// OR make different db calls based on diff envs

const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });     // Must use these two lines before anything


const app = express();
const PORT = process.env.PORT || 8000;

console.log(app.get("env"));    // It'll show development as it is our current env. 
// Make sure to change development to production when deploying using config.env file

console.log(process.env);      // To log all Node.js env vars

app.listen(PORT, () => console.log("Server running on port " + PORT));