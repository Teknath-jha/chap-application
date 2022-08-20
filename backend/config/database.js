const mongoose = require("mongoose");

const connectDB = async() => {
  try {
    // console.log(process.env);
    const conn = await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(
          `mongodb is connected with server: ${data.connection.host}`
        );
      });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
