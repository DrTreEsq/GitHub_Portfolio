const express = require("express");
const app = express();

const hostname = "127.0.0.1";

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) =>{
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
})

app.listen(PORT, hostname, () => {
  console.log(`Server started on port ${hostname}:${PORT}/`)
});