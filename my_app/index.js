import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

// middleware
// main page GET
app.get("/", (req, res) => {
  // res.send("Main page GET request");
  // res.send("<h1>Hello Main page</h1");
  // res.send(`
  // <h1>H1</h1>
  // <h2>H2</h2>
  // <h3>H3</h3>
  // <h4>H4</h4>
  // `);
  res.sendFile(__dirname + "/public/main.html");
});

app.listen(3000, () => {
  console.log("Server is running");
});
