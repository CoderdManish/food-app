
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,} from './action-types/cart-actions'

//add cart
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract 
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add 
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
