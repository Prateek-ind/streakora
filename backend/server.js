require("dotenv").config();

const app = require("./src/app");
const connectDb = require("./config/connectDB");

connectDb().then(() => {
  app.listen(3000, () => {
    console.log("Server started");
  });
});
