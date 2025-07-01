const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());

let port = 1111;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => { 
   res.send("You are on the home page!, Hello, am your root");
});

app.get("/:username/:id", (req, res) =>  {
  let { username, id } = req.params;
  // res.send(`welcome to the page of @${username}`);
  let htmlStr = `<h1>welcome to the page of @{username}</h1>`;
  res.send(htmlStr);  
});

app.get("/search",(req,res) => {
  let { q } = req.query;
  if(!q) {
    res.send("<h1>nothing searched</h1>");
  }
  console.log(req.query);
  res.send(`<h1>search results for query: ${q}</h1>`);
});
