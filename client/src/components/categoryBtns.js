import React from "react";

const  CategoryBtns = (props) => {
    return (
        <div className="container text-center mt-5">
        <div className="btn-group mx-auto" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary mr-5" onClick={() => props.categoryClick(12)}>ACCESSORIES</button>
            <button type="button" className="btn btn-secondary mr-5" onClick={() => props.categoryClick(4)}>APPLIANCE</button>
            <button type="button" className="btn btn-secondary mr-5" onClick={() => props.categoryClick(6)}>COMPUTERS</button>
            <button type="button" className="btn btn-secondary mr-5" onClick={() => props.categoryClick(11)}>MOBILE AUDIO</button>
        </div>
    </div>
    );
}

export default CategoryBtns