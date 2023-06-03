import React from 'react';
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default MyNavbar;