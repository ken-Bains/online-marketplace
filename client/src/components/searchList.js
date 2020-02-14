import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchList = (props) => {
    const cardClass = {
        card: {
            width: 200,
            height: 400,
            margin: 10,
            display: "inline-block",
            border: "1px solid black",
            verticalAlign: "top",
            padding: "5px"
        },
        img: {
            width: "100%",
            height: "200px"
        }
    }
    return props.list.length > 1 ? (
        <div className="container">
            {props.list.map((item, index) => {
                return (
                    <div key={index} style={cardClass.card}>
                        <img src={item.image} style={cardClass.img} />
                        <p><b>Name:</b> <small>{item.name}</small></p>
                    </div>

                )
            })}
        </div>
    ) : (
            <div>searching....</div>
        );
}

export default SearchList