import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-from">
            <div>
                <h2>Login</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create account</Link></p>
                <div>-------or---------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;