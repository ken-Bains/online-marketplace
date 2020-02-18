import React from "react";

const SearchForm = (props) => {
    return (
        <form className="form-inline container justify-content-center">
            <div className="form-group mx-sm-3 mb-2">
                <input ref={props.inputRef} type="text" className="form-control" id="searchInput" placeholder="enter search item" />
            </div>
            <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
    );
}

export default SearchForm