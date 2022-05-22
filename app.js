// 이용 약관에 따르면 DELETE는 user정보를 지우기 위해 반드시 필요하다,
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const http = require("http");

// PORT number
const PORT = 3000;

app.use("/private", express.static(path.join(__dirname, "private")));
app.use(express.static(path.join(__dirname, "./public")));

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
});

// listen server
server.listen(process.env.PORT || 3000);
