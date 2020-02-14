import React from 'react';
import Navbar from "./components/navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/cart";
import Search from "./components/search";
import CartContextProvider from './utils/cartProvider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CartContextProvider>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
