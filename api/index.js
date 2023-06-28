const express= require("express");
const app = express();

const PORT=40000;

app.listen(PORT,()=>console.log("Express listenning in port: " + PORT))