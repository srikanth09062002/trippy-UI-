import React from 'react'
import './SignUp.css'

import Name  from '../assets/Name.jpg'
import Email from '../assets/Email.jpg'
import Password from '../assets/Password.jpg'

function SignUp() {
  return (
    <div className='container'>
        <div className='header'></div>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
    <div className='inputs'>
        <div className='input'>
            <img src={Name}alt=''/>
            <input type='text'/>
        </div>

        <div className='input'>
            <img src={Email}alt=''/>
            <input type='email'/>
        </div>

        <div className='input'>
            <img src={Password}alt=''/>
            <input type='password'/>
        </div>
    </div>
    </div>
    
  )
}

export default SignUp
