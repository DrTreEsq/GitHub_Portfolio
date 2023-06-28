//const express = require("express");
const http = require("http");
//const app = express();

const hostname = "127.0.0.1";

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) =>{
  console.log(res.statusCode = 200);
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
})

server.listen(PORT, hostname, () => {
  console.log(`Server started on port ${hostname}:${PORT}/`)
});