export function createProduct(products){
    return {type:"CREATE_PRODUCT",products};
}

export function updateCheckOut(products){
    return {type:"UPDATE_CHECKOUT",products};
}

export function updateSaveForLater(products){
    return { type:"UPDATE_SAVEFORLATER",products};
}

export function updateCheckOutChecked(products){
    return { type:"UPDATE_CHECKOUT_CHECKED",products};
}

export function updateSaveForLaterChecked(products){
    return { type:"UPDATE_SAVEFORLATER_CHECKED",products};
}

export function deleteCheckOut(products){
    return { type: "DELETE_CHECKOUT",products};
}

export function deleteSaveForLater(products){
    return { type: "DELETE_SAVEFORLATER",products};
}

export function updateCheckoutCheckAll(products){
    return { type:"UPDATE_CHECKOUT_CHECKALL", products};
}

export function updateSaveForLaterCheckAll(products){
    return { type:"UPDATE_SAVEFORLATER_CHECKALL", products};
}