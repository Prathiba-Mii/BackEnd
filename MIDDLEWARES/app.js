const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// middleware -> response send
// app.use((req,res,next) => {
//   console.log("Hi, I am 1st middleware");
  // res.send("middleware finished");
//   next();
// });

// app.use((req,res,next) => {
//   console.log("Hi, I am 2nd middleware");
  // res.send("middleware finished");
  // next();
  // return next();
 // console.log("this is after next()");
  
// });

// utility Middleware 
// app.use((req,res,next) => {
//   // console.log(req.method,req.hostname,req.path);
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method,req.path,req.hostname, req.time);
  
//   next();  
// });


// app.use callback
app.use("/random", (req,res,next) => {
  console.log("I am only for random");
  next();
})

// 404
// app.use((req,res) => {
//   res.status(404).send("Page not found");
// });

const checkToken =  (req,res,next) => {
  let { token } = req.query;
  if(token === "giveaccess") {
   return next();
  }
  // res.send("ACCESS DENIED!");
  // we sent error
  //  throw new Error("ACCESS DENIED!");
  throw new ExpressError(401,"ACCESS DENIED!");
};

// error handling
app.get("/err", (req,res) => {
   abcd = abcd; 
  
});

// admin error
app.get("/admin", (req,res) => {
   throw new ExpressError(403, " Access to admin is Forbidden");
});

// custom error
app.use((err,req,res,next) => {
  // console.log("----- ERROR-----");
  // next(err);
  let { status = 500,message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

// app.use((err,req,res,next) => {
//   console.log("----- ERROR2 Middleware -----");
//   next(err);
// });


// Acess token
app.get("/api", checkToken, (req,res) => {
  res.send("data");
});


app.get("/", (req,res) => {
  res.send("Hii, I am root.");
});

app.get("/random" , (req,res) => {
  res.send("this is a random page");
});

app.listen(1111, () => {
  console.log("server listening to port 111");
  
});