const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://panshulsinghai800:par7f55EoqX4mG16@cluster0.zws53zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  () => {
    console.log("connected to mongodb");
  }
);
