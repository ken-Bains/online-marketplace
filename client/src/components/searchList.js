import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchList = (props) => {
    const cardClass = {
        card: {
            width: 200,
            height: 400,
            margin: 10,
            display: "inline-block",
            border: "1px solid black"
        },
        img: {
            width: "45%",
            height: 200
        }
    }
    console.log(props.list)
    return props.list.length > 1 ? (
        <div className="container">
            {props.list.map((item, index) => {
                return (
                    <div key={index} style={cardClass.card}>
                        <img src={item.image} style={cardClass.img} />
                        <p>{item.name}</p>
                    </div>

                )
            })}
        </div>
    ) : (
            <div>searching....</div>
        );
}

export default SearchList