// 이용 약관에 따르면 DELETE는 user정보를 지우기 위해 반드시 필요하다,
const express = require("express");
const app = express();
const path = require("path");

// PORT number
const PORT = 3000;

app.use("/private", express.static(path.join(__dirname, "private")));
app.use(express.static(path.join(__dirname, "public")));

// listen server
app.listen(process.env.PORT || 3000);
