import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrentState] = useState('Login')

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"? <></> : <input type="text" placeholder='Your name' required /> }
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState ==='Sign up'?"Create an account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree the terms of use and privacy policy.</p>
        </div>
        {currState==='Login'
         ?<p>Create new account? <span onClick={()=>setCurrentState('Sign up')}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login here</span></p>
         }
      </form>
    </div>
  )
}

export default LoginPopup
