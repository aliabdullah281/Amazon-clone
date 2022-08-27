import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
        <Link to="/">
        <img src="0x0.jpg" className='login__logo'/> 
        </Link>

        <div className='login__container'>
            <h1> sign-in </h1>
            <form>
                    <h5> E-mail </h5>
                    <input type="text" />

                    
                    <h5> Pasword </h5>
                    <input type="password" />
                    <button className='login__signInButton' >Sign In</button>
            </form>    
            <p>By signing-in you agree to Amazon's conditions of Use & Sale.Please see our privacy Notice, 
                our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__registerButton'> Create your Amazon Account </button>
        </div>
    </div>
  )
}

export default Login