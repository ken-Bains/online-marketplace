import React, { createContext, useReducer } from "react";

export const CartProvider = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return
        case "DELETE_ITEM":
            return
        case "EDIT_ITEM":
            return
        default:
            return state
    }
}
const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        //database call to set default value
    })
    return (
        <CartProvider.Provider>
            {props.children}
        </CartProvider.Provider>
    )
}

export default CartContextProvider;