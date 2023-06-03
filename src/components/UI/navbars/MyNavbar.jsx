import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../buttons/MyButton";

const MyNavbar = () => {

    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Exit
            </MyButton>
            <div className="navbar__links">
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;