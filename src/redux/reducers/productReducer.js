
export default function productReducer(state=[],action){
    switch(action.type){
        case "CREATE_PRODUCT":
            return action.products;
        case "UPDATE_CHECKOUT":
            return updateCheckout(action.products);
        case "UPDATE_SAVEFORLATER":
            return updateSaveForLater(action.products);
        case "UPDATE_CHECKOUT_CHECKED":
            return updateCheckOutChecked(action.products);
        case "UPDATE_SAVEFORLATER_CHECKED":
            return updateSaveForLaterChecked(action.products);
        case "DELETE_CHECKOUT":
            return deleteCheckout(action.products);
        case "DELETE_SAVEFORLATER":
            return deleteSaveForLater(action.products);
        case "UPDATE_CHECKOUT_CHECKALL":
            return updateCheckoutCheckAll(action.products);
        case "UPDATE_SAVEFORLATER_CHECKALL":
            return updateSaveForLaterCheckAll(action.products);
        default:
            return state;
    }
}

const updateSaveForLaterCheckAll = (products) => {
   
    let watchListProducts = products.watchList ;
    watchListProducts.forEach(product=>{
        product.isChecked = products.isChecked;	
    });
    const updatedProducts = {
        checkOut : products.checkOut,
        watchList : watchListProducts
    }
    return updatedProducts;
}

const updateCheckoutCheckAll = (products) => {
  
    let checkOutProducts = products.checkOut ;
    checkOutProducts.forEach(product=>{
        product.isChecked = products.isChecked;	
    });
    const updatedProducts = {
        checkOut : checkOutProducts,
        watchList : products.watchList
    };
    return updatedProducts ;
}

const deleteSaveForLater = (products) => {
    let productList =  products.watchList;

    productList = productList.filter((product)=>{
        return !product.isChecked;
    });
    const updatedProducts = {
        watchList : productList,
        checkOut : products.checkOut
    }
    return updatedProducts ;
}

const deleteCheckout = (products) =>{
    let productList =  products.checkOut;

    productList = productList.filter((product)=>{
        return !product.isChecked;
    });

    const updatedProducts = {
        checkOut : productList,
        watchList : products.watchList
    }
    return updatedProducts;
}

const updateCheckOutChecked = (products) =>{
    let productList =  products.checkOut;

    productList.forEach(product => {
        if (parseInt(product.id) === products.checkedItem){
            product.isChecked = !product.isChecked;
        }
    });
    
    const updatedProducts = {
        checkOut : productList,
        watchList : products.watchList
    };
        
    return updatedProducts;
}

const updateSaveForLaterChecked = (products) =>{
    let productList =  products.watchList;

    productList.forEach(product => {
        if (parseInt(product.id) === products.checkedItem){
            product.isChecked = !product.isChecked;
        }
    });
    
    const updatedProducts = {
        watchList : productList,
        checkOut : products.checkOut
    };
        
    return updatedProducts;
}

const updateCheckout = (products) => {
    let checkOutProducts = products.checkOut ;
    let watchListProducts = products.watchList || [];

    let newWatchListProducts = checkOutProducts.filter((product)=>{
        return product.isChecked;
    });

    checkOutProducts = checkOutProducts.filter((product)=>{
        return !product.isChecked;
    });

    newWatchListProducts.forEach(product=>{
        product.isChecked = false;	
    });

    watchListProducts = watchListProducts.concat(newWatchListProducts);

    const updatedProducts = {
        checkOut : checkOutProducts,
        watchList : watchListProducts
    };
    return updatedProducts;
};

const updateSaveForLater = (products) =>  {
    let checkOutProducts = products.checkOut ;
    let watchListProducts = products.watchList ;

    let newCheckOutProducts = watchListProducts.filter((product)=>{
        return product.isChecked;
    });
    
    watchListProducts = watchListProducts.filter((product)=>{
        return !product.isChecked;
    });

    newCheckOutProducts.forEach(product=>{
        product.isChecked = false;	
    });

    checkOutProducts = checkOutProducts.concat(newCheckOutProducts);
    
    const updatedProducts = {
        checkOut : checkOutProducts,
        watchList : watchListProducts
    }
    return updatedProducts ;

}
