import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const ItemModal = (props) => {
    // const quanity = props.itemDetail.quantity ? props.itemDetail.quantity : 1;
    const style = {
        img: {
            width: 400,
            height: 450,
            marginBottom: 30
        }
    }

    // function quanityChange(e) {
    //     console.log(e.target.value)
    //     props.setQuanityInput(e.target.value)
    // }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.itemDetail.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.itemDetail.image} style={style.img} alt={props.itemDetail.name} />
                    <p><b>Price: </b>{props.itemDetail.salePrice}</p>
                    <p><b>Description: </b>{props.itemDetail.shortDescription}</p>
                    {/* <p>Quantity: <input placeholder={props.quanityInput} onChange={quanityChange} /></p> */}
                </Modal.Body>
                <Modal.Footer>
                    {props.isItemInCart.flag === true ? (
                        <>
            
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={() => props.removeFromCart(props.itemDetail.name)}>
                                Remove from Cart
                            </Button>
                        </>) : (
                            <>
                                <Button variant="secondary" onClick={props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={props.addToCart}>
                                    Add to Cart
                                </Button>
                            </>
                        )}

                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default ItemModal