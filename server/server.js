const ProductService = require("./service");
var express = require('express');
var app = express();
const  productService = new ProductService();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req,res){
   
    const products = productService.getProducts();
    res.send(products);
});



app.post('/',function(req,res){
    console.log(req.body);
});

app.listen(8000,()=> console.log("Server running on 8000"));