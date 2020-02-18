import React, { useRef, useEffect, useState, useContext } from "react";
import SearchList from "./searchList";
import API from "../utils/API";
import CategoryBtns from "./categoryBtns";
import SearchForm from "./searchForm";
import ItemModal from "./itemModal";
import { CartContext } from "../utils/cartProvider";


const Search = () => {
    const inputRef = useRef("");
    // const quanityInput = useRef();
    // const [quanityInput, setQuanityInput] = useState(1);
    const [searchItemsList, setSearchItemsList] = useState([]);
    const [itemDetail, setItemDetail] = useState({});
    const [show, setShow] = useState(false);
    const [isItemInCart, setIsItemInCart] = useState({ flag: false });
    const { cart, dispatch } = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleFormSubmit(e) {
        e.preventDefault();
        itemSearch(inputRef.current.value);
        inputRef.current.value = "";
    }

    function itemSearch(item) {
        API.searchItem(item).then((res) => {
            const newList = res.data.filter(item => {
                if (item.productId !== null) {
                    return item
                } else {
                    return null
                }
            })
            setSearchItemsList(newList)
        });
    }

    function categoryClick(num) {
        API.searchCategories(num).then((res) => {
            const newList = res.data.filter(item => {
                if (item.productId !== null) {
                    return item
                } else {
                    return null
                }
            })
            setSearchItemsList(newList)
        });
    }

    function itemDetails(id) {
        var some = [];

        API.itemDetails(id).then(res => {
            cart.length > 0 ? (
                some = cart.filter(el => {
                    if (el.name === res.data.name) {
                        return el
                    } else {return null}
                })
            ) : (
                setIsItemInCart({ flag: false })
            )
            some.length > 0 ? setIsItemInCart({ flag: true }) : setIsItemInCart({ flag: false });
            // some.length > 0 ? setItemDetail(some[0]) :  setItemDetail(res.data);

            setItemDetail(res.data);
            handleShow();
        })
    }

    function addToCart() {
        // const quantity = quanityInput.current.value ? quanityInput.current.value : 1;
        const cartItem = {
            name: itemDetail.name,
            shortDescription: itemDetail.shortDescription,
            image: itemDetail.image,
            salePrice: itemDetail.salePrice,
            quantity: 1,
            totalPrice: itemDetail.salePrice
        }
        
        API.createItem(cartItem).then(res => {
            cartItem["id"] = res.data._id
            dispatch({ type: "ADD_ITEM", item: cartItem });
            setIsItemInCart({ flag: true });
        })
    }

    function removeFromCart(name) {
        const removeItem = cart.filter(el =>{
            if(el.name === name) {
                return el
            } else {
                return null
            }
        });
        API.deleteItem(removeItem).then(res => {
            dispatch({ type: "DELETE_ITEM", name: name });
            setIsItemInCart({ flag: false });
        })
    }

    // function updateItemFromCart(name) {
    //     dispatch({type: "EDIT_ITEM", name: name});
    // }

    useEffect(() => {
        if (searchItemsList.length === 0) {
            itemSearch("")
        }

    }, [searchItemsList])

    return (
        <div>
            <div className="jumbotron header-container">
                <SearchForm inputRef={inputRef} handleFormSubmit={handleFormSubmit} />
                <CategoryBtns categoryClick={categoryClick} />
            </div>
            <SearchList list={searchItemsList} itemDetails={itemDetails} handleShow={handleShow} />
            <ItemModal
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                itemDetail={itemDetail}
                addToCart={addToCart}
                isItemInCart={isItemInCart}
                removeFromCart={removeFromCart}
                // setQuanityInput={setQuanityInput}
                // quanityInput={quanityInput}
            />
        </div>
    )
}

export default Search