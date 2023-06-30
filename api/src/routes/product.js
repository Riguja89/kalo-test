const {Router} = require('express')
const productSchema = require('../models/product');

const router=Router();

router.post("/products",(req,res)=>{
    const product= productSchema(req.body);
    product.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});

router.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    productSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});

router.get("/products",(req,res)=>{
    productSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});

router.put("/products/:id",(req,res)=>{
    const id=req.params.id;
    const {name, description, image, imagefondo, price }= req.body;
    productSchema
    .updateOne({_id:id},{$set: {name, description, image, imagefondo, price } })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}))
});

module.exports=router;