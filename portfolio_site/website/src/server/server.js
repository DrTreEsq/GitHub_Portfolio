const express = require("express");
const app = express();

const hostname = "127.0.0.1";

const PORT = process.env.PORT || 8080;
//stack overflow says use WEB_APP configuration instead of env.PORT for production


//update on Azure
//1. azure not redeploying saying "not found" - don't know if recent changes have been taking into effect
//2. looking into docker log files on computer  - debugging new error message for wwwroot looking for server.js,
//^^ tried putting in src folder for react site, not sure if those changes have hit yet bc not redeploying
//try looking at ways to view in browser so see how running in Azure

app.get("/", (req, res) =>{
  console.log(res.statusCode = 200);
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
})

app.listen(PORT, hostname, () => {
  console.log(`Server started on port ${hostname}:${PORT}/`)
});


//https://emswebsite.scm.azurewebsites.net/api/logs/docker/zip


/* http instead of express alternative syntax
const http = require("http");

const hostname = "127.0.0.1";

const PORT = process.env.PORT || 8080;

const server = http.createServer ((req, res) =>{
  console.log(res.statusCode = 200);
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
})

server.listen(PORT, hostname, () => {
  console.log(`Server started on port ${hostname}:${PORT}/`)
});
*/
