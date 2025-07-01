const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

const port = 1111;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res) => {
   res.render("home");
});

app.get("/ig/:username", (req,res) => {
  let { username } = req.params;
   const instaData = require("./data.json");
   const data = instaData[username];
   console.log(data);
   if(data) {
      res.render("instagram", { data });
   } else {
    res.render("error");
   }
  
});

app.get("/hello", (req,res) => {
  const instaData = require("./data.json");
  console.log(instaData);
  res.send("hello");
});

app.get("/rolldice", (req,res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1 ;
  res.render("rolldice", {diceVal});
});

app.listen(port,() => {
  console.log(`listening on port ${port}`);
  
});