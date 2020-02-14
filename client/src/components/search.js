import React, { useRef, useEffect, useState } from "react";
import SearchList from "./searchList";
import API from "../utils/API";
import axios from "axios";

const Search = () => {
    const inputRef = useRef("");
    const [searchItemsList, setSearchItemsList] = useState([]);

    
    function handleFormSubmit(e) {
        e.preventDefault();
        itemSearch(inputRef.current.value);
        inputRef.current.value = "";
    }

    useEffect(() => {
        // axios.get("http://localhost:3001/api/products?q=iphone").then(results => console.log(results))
        //api file that will make a axios call to certain path
        // activities/20-Ins_Store/src/utils/GlobalState.js
        // /Users/ken/Desktop/class/my-class-repo/20-MERN/activities/04-Stu_AJAXFormDelete/Solved/basic/client/src/pages/Books/Books.js
        // activities/04-Stu_AJAXFormDelete/Solved/basic/client/src/utils/API.js
        // itemSearch("iphone")
        searchItemsList.length > 0 ? console.log("items") : itemSearch("")

    }, [searchItemsList])

    function itemSearch(item) {
        API.searchItem(item).then((res)=> setSearchItemsList(res.data));
    }

    return (
        <div>
            <div className="jumbotron">
                <form className="form-inline container justify-content-center">
                    <div className="form-group mx-sm-3 mb-2">
                        <input ref={inputRef} type="text" className="form-control" id="searchInput" placeholder="enter search item" />
                    </div>
                    <button onClick={handleFormSubmit} type="submit" className="btn btn-primary mb-2">Search</button>
                </form>
            </div>
            <SearchList list={searchItemsList}/>
        </div>
    )
}

export default Search