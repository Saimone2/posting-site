import React from 'react';
import {Routes, Route} from "react-router-dom";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    );
};

export default AppRouter;