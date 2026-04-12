const express = require("express");
const app = express();

// Route (API endpoint)
app.get("/", (req, res) => {
    res.send("Hello World API 🚀");
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});