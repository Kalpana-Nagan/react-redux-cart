export default function productReducer(state=[],action){
    switch(action.type){
        case "CREATE_PRODUCT":
            return action.products;
        default:
            return state;
    }
}