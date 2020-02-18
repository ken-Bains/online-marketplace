import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/cartProvider";
import { Table, Button } from "react-bootstrap";
import API from "../utils/API";


const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [total, setTotal] = useState();
    const style = {
        img: {
            height: 100,
            width: 100
        },
        input: {
            width: 30
        },
        update: {
            display: "flex",
            paddingTop: 43
        }
    };

    // function quantityCalculate(e) {
    //     const inputValues = document.querySelectorAll(".quantityInput");
    //     console.log(inputValues);
    // };

    function removeFromCart(item) {
        API.deleteItem([item]).then(res => {
            dispatch({ type: "DELETE_ITEM", name: item.name });
        })
    }

    function quantityChange(e) {
        console.log(e.target.value);
        console.log(e.target);
    }

    useEffect(() => {
        if (cart.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const newCart = cart.map(el => {
                return el.totalPrice
            });
            setTotal(newCart.reduce(reducer));
        }
    },[total, cart]);

    return (
        <div className="container mt-5">
            {cart.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><img style={style.img} src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.shortDescription}</td>
                                    <td><input style={style.input} type="text" className="quantityInput" placeholder={item.quantity} onChange={quantityChange} name={item.id}/></td>
                                    <td>${item.salePrice}</td>
                                    <td> <Button variant="danger" onClick={() => removeFromCart(item)}>x</Button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-right"><b>Total: </b></td>
                            <td>${total}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>) : (
                    <div className="mt-5 container text-center">Shopping cart is empty</div>
                )
            }
        </div>
    )
}

export default Cart