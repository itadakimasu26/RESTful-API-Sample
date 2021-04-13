// package/s imported
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require ('dotenv/config');

// init express app
const app = express();

//init server
app.listen(3031);

// middlewares
app.use(express.json());
app.use(bodyParser.json());

//import routes
const dataRoute = require('./routes/post');
app.use('/posts', dataRoute);

//connect to db
mongoose.connect(
  process.env.db_connection,
  {useNewUrlParser : true ,
  useUnifiedTopology : true},
  () =>{
    console.log('connected to MDB!');
});

// routes
app.get("/", (req, res) => {
  res.send("Index!");
});
