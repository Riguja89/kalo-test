const express= require("express");
const app = express();
const stripeRoutes = require('./stripe.js');
const productRoutes = require('./routes/product.js');

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

app.use('/', stripeRoutes);
app.use('/api', productRoutes);

module.exports=app;
