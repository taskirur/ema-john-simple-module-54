import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register : create account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='your email'/>
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter-password" />
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <button className="btn-regular">Google-sign-in</button>
            </div>
        </div>
    );
};

export default Register;