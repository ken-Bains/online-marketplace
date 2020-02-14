import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Online Marketplace</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Search</Link>
                    <Link className="nav-item nav-link" to="/cart">Cart</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar