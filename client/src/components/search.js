import React, { useRef, useEffect, useState } from "react";
import SearchList from "./searchList";
import API from "../utils/API";

const Search = () => {
    const inputRef = useRef("");
    const [searchItemsList, setSearchItemsList] = useState([]);


    function handleFormSubmit(e) {
        e.preventDefault();
        itemSearch(inputRef.current.value);
        inputRef.current.value = "";
    }

    function itemSearch(item) {
        API.searchItem(item).then((res) => {
            setSearchItemsList(res.data)
            console.log(res.data);
        });
    }

    function buttonClick(num) {
        API.searchCategories(num).then((res) => {
            setSearchItemsList(res.data)
            console.log(res.data);
        });
    }

    useEffect(() => {
        if (searchItemsList.length === 0) {
            itemSearch("")
        }

    }, [searchItemsList])
    return (
        <div>
            <div className="jumbotron">
                <form className="form-inline container justify-content-center">
                    <div className="form-group mx-sm-3 mb-2">
                        <input ref={inputRef} type="text" className="form-control" id="searchInput" placeholder="enter search item" />
                    </div>
                    <button onClick={handleFormSubmit} type="submit" className="btn btn-primary mb-2">Search</button>
                </form>
                <div className="container text-center mt-5">
                    <div className="btn-group mx-auto" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary mr-5" onClick={() => buttonClick(12)}>ACCESSORIES</button>
                        <button type="button" className="btn btn-secondary mr-5" onClick={() => buttonClick(4)}>APPLIANCE</button>
                        <button type="button" className="btn btn-secondary mr-5" onClick={() => buttonClick(6)}>COMPUTERS</button>
                        <button type="button" className="btn btn-secondary mr-5" onClick={() => buttonClick(11)}>MOBILE AUDIO</button>
                    </div>
                </div>
            </div>
            <SearchList list={searchItemsList} />
        </div>
    )
}

export default Search