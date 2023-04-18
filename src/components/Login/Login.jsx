import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import './Login.css'

const Login = () => {
    const [show,setShow] = useState(false)
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login </h2>
            <form onSubmit={handleLogin}>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" name='email' id='' required />
            </div>

            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type={show ? 'text' : 'password'} name='password' id='' required />
                <p onClick={()=>setShow(!show)}>
                    {
                        show ? <span>Hide Password</span>
                        :
                        <span>Show Password</span>
                    }
                </p>
            </div>

            <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John? <Link to='/signup'>Sign up !</Link> </small></p>
        </div>
    );
};

export default Login;