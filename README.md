# online-marketplace

## Summary 
This app is a simulation of a online marketplace like Amazon or Best Buy. The search items are pulled from Best Buy API. The app lets to search from a category, view more information on that category, and add the item to a cart. 

## Link to site

## Site Clip
![Site](assets/online-marketplace.mp4)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Mongo - MongoDB is a cross-platform document-oriented database program.
- Mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.
- Express - Web application framework for Node.js. Designed for building web applications and APIs.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
- React - JavaScript library for building user interfaces.
- Axios - Promise based HTTP client for the browser and node.js
- React Bootstap - React specific Bootstrap used for styling


## Code Snippet
```javascript
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

```
- The code snippit above is example of React hooks.


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
