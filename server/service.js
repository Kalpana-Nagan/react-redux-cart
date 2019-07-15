module.exports = function ProductService() {
    var products = [];

    var fs = require('fs');
    fs.readFile("config/products.json","utf8",function(err,data){
        if(err) throw err;
        products = data;    
    });

    

    this.getProducts = function(){
        return products;
    }

    this.addProducts = function(product){
        products.push(product);
        return products;
    }

    this.removeProduct= function(id) {
        
    }
};
