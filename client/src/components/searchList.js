import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../src/index.css";
import { Spinner } from "react-bootstrap";

const SearchList = (props) => {
    const style = {
        card: {
            width: 200,
            height: 390,
            margin: 10,
            display: "inline-block",
            border: "1px solid rgba(0,0,0,.125)",
            verticalAlign: "top",
            padding: "10px",
            position: "relative",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"

        },
        img: {
            width: "100%",
            height: "200px",
            marginBottom: 10
        },
        price: {
            position: "absolute",
            bottom: 0,
            left: 10,
            borderTop: "1px solid rgba(0,0,0,.125)",
            width: 175,
            paddingTop: 10

        },
        spinner: {
            textAlign: "center",
            marginTop: 100
        }
    }
    return props.list.length > 1 ? (
        <div className="container">
            {props.list.slice(0, 10).map((item, index) => {
                return (
                    <div key={index} style={style.card} className="card">
                        <img src={item.image} style={style.img} alt={item.name}/>
                        <p className="itemLink" onClick={() => props.itemDetails(item.productId)}>{item.name}</p>
                        <p style={style.hr}></p>
                        <p style={style.price}><b>Price: </b>{item.salePrice}</p>
                    </div>
                )
            })}
        </div>
    ) : (
        <div style={style.spinner} >
            <Spinner animation="border" />
        </div>
    );
}

export default SearchList