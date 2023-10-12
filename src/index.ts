import express from "express";
import { connect } from "./repository/index.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  res.send(requestBody);
});

await connect();

app.listen(8080);
