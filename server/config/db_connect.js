const mongoose = require("mongoose");

const dbConnect = () => {
  
  mongoose
    .connect(process.env.DB_URL)
    .then((res) => console.log(`Database connected , ${res.connection.host}`))
    
};

module.exports = dbConnect;
