//check info Express et les methodes utilisé 
const express = require("express");
const dotenv = require('dotenv').config();
const connectDB = require("./config/db");
const port = 5000

//Connexion a la db
//console.log(dotenv)
connectDB;

const app = express();

//Middleware qui permet de traiter les données du "req" dans les routes
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

app.use("/post", require("./routes/post.routes"));

//Lancez le serveur 
app.listen(port, () => console.log("Serveur a demaré au port " + port))