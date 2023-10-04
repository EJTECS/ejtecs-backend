const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  res.send(requestBody);
});

app.listen(8080);
