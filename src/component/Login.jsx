import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate()

    const [user, setLoginUser] = useState({
        username: "",
        password: ""
    })

    const [passwordType, setPasswordType] = useState("password");

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        if (user.username === "foo" && user.password === "bar") {

            alert("Login successful")

            navigate("/home")
        }
        else {
            alert("Enter valid username and password")
        }
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <div className="login">
            <h1 className="login1">Login</h1>
            <div className="usrname">
                <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="User Name"></input>
            </div>
            <div className="password">
                <input type={passwordType} name="password" value={user.password} onChange={handleChange} placeholder="Password">
                </input>
                {passwordType === "password" ? <FaRegEye onClick={togglePassword} className="eye" /> : <FaRegEyeSlash onClick={togglePassword} className="eye" />}
            </div>
            <div className="button" onClick={login}>
                LogIn
            </div>
        </div>
    )

}

export default Login