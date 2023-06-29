const express= require("express");
const app = express();
const routes = require('./stripe.js');

require('./db.js')

app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // activar para que permita cors local
  //res.header('Access-Control-Allow-Origin', 'https://videogame-clien-api.vercel.app');  // CORS EN EL DEPLY
  res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
 });
 

app.get("/",(req, res)=>{
  res.send("hola como vas? tu")
});

app.use('/', routes);

module.exports=app;
