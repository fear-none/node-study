import express from "express";

const app = express();

// middleware
// main page GET
app.get("/", (req, res) => {
  res.send("Main page GET request");
});

app.listen(3000, () => {
  console.log("Server is running");
});
