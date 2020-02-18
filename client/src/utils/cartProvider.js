import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, {
                name: action.item.name,
                shortDescription: action.item.shortDescription,
                image: action.item.image,
                salePrice: action.item.salePrice,
                totalPrice: action.item.totalPrice,
                id: action.item.id,
                quantity: action.item.quantity
            }]
        case "DELETE_ITEM":
            return state.filter(item => item.name !== action.name)
        case "EDIT_ITEM":
            return state.map(current => {
                if(current.id === action.item.id) {
                    current["quantity"] = action.item.quantity;
                    current["totalPrice"] = action.item.totalPrice;
                    return current
                } else {
                    return current
                }
            });
        default:
            return state
    }
}
const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;