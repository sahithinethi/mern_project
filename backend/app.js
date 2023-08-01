require("dotenv").config();
const express = require("express");

const app = express();

const cors = require("cors");
require("./db/connection");
const router = require("./routes/router");
const PORT = 4002;



// middleware
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true })); 

app.use(router);

app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
