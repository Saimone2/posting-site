import React, {useContext} from 'react';
import {AuthContext} from "../context";
import MyButton from "../components/UI/buttons/MyButton";
import MyInput from "../components/UI/inputs/MyInput";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login"/>
                <MyInput type="password" placeholder="Enter password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;