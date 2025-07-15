const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
  {
    from: "Prathiba",
    to: "Chutki",
    msg: "send me your Hindi Notes",
    created_at: new Date(),
  },
  {
    from: "Sridevi",
    to: "Sonu Mama",
    msg: "send me your Maths Notes",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Thanvi",
    msg: "send me your Telugu Notes",
    created_at: new Date(),
  },
  {
    from: "Nikitha",
    to: "Vanitha",
    msg: "send me your Hindi Notes",
    created_at: new Date(),
  },
  {
    from: "Prathibha",
    to: "Mee",
    msg: "send me your Drawing Notes",
    created_at: new Date(),
  },
]
  

 Chat.insertMany(allChats);