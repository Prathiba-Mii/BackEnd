const mongoose = require('mongoose');

main().then((res) => 
  {console.log("connection successful");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// "Delete"
//  User.deleteOne({name:"Prathiba"}).then((res) => {
//   console.log(res);
//  });

User.findByIdAndDelete("686e843f50f065afd367ddeb").then((res) => {
  console.log(res);
 });


// "Updating"

// User.updateOne( { name:"Prathiba"}, {age:22}).then((res) => {
//   console.log(res);  
// }).catch((err) => {
//   console.log(err);
// });

// "Update"

// User.findOneAndUpdate( { name: "Prathiba"},  {age:26}, {new: true})
//   .then((res) => {
//   console.log(res);  
// })
//   .catch((err) => {
//   console.log(err);
// });


//findById
// User.findById( "686e843f50f065afd367ddec")
//   .then((res) => {
//   console.log(res);
// })
//   .catch((err) => {
//     console.log(err);
//   });

//user1 saving insert
//  const user1 = new User( {
//   name: "Prathiba",
//   email:"PrathibhaKamle@gmail.com",
//   age:21,
// });

// user1.save();

// user2 saving
// const user2 = new User( {
//   name: "PrathibaKamle",
//   email:"PrathibaKamle@gmail.com",
//   age:21,
// });
//with then and catch
// user2.save().then((res) => {
//   console.log(res);
// })
//   .catch((err) => {
//     console.log(err);
//   });


// "Insert Many"
// User.insertMany([
//   {name: "Sridevi", email:"sridevi@gmail.com", age:41},
//   {name: "Nikitha", email:"nikitha@gmail.com", age:41},
//   {name: "Sneha", email:"sneha@gmail.com", age:41},
// ]).then((res) => {
//   console.log(res);
// });