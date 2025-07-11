const mongoose = require('mongoose');

main().then((res) => 
  {console.log("connection successful");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"Price is too low for Amazon selling"],
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["fiction","non-fiction"]
  },
  genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

// update
  Book.findByIdAndDelete("6870ba9f0889b6f77feb1a0e",{ price: -100}, {runValidators: true})
  .then((res) => {
    console.log(res);
  });

let book1 = new Book ( {
  title: "Mathematics xII",
  author: "RD Sharma",
  price: 1200,
  category: "fiction",
});
book1.save().then(res =>{
  console.log(res);
}).catch((err) => {
  console.log(err.errors.price.properties.message);
});

let book2 = new Book ( {
  title: "Gone Girl",
  author: "Harper Lee",
  price: "299",
  category: "non-fiction",
});

book2.save().then(res =>{
  console.log(res);
}).catch((err) => {
  console.log(err);
});

let book3 = new Book ( {
  title: "Marvel Comics v2",
  price: 600,
  genre:["comics","superheroes","fiction"],
});

book3.save().then(res =>{
  console.log(res);
}).catch((err) => {
  console.log(err);
});