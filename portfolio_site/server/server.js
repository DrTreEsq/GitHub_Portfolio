const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 8080;
//stack overflow says use WEB_APP configuration instead of env.PORT for production

app.get("/", (req, res) =>{
  console.log(res.statusCode = 200);
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
})

app.listen(PORT, hostname, () => {
  console.log(`Server started on port ${hostname}:${PORT}/`)
});
