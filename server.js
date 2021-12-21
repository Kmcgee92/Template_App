const path = require("path");
const express = require("express");
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./client/build")));
// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = process.env.PORT || 5000 ;
app.listen(port, () => {
  console.log(`serving react on http://localhost:${port}`);
});
