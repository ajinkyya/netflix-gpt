import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    } 
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg'
                alt='Background'></img>
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl p-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {
                !isSignInForm && <input type='text' placeholder='Enter Your Name' className='p-2 m-2 w-full bg-gray-700'></input>
            }
            <input type='text' placeholder='Email Address' className='p-2 m-2 w-full bg-gray-700 '></input>
            <input type ='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'></input>
            <button className='py-2 m-2 bg-red-700 w-full cursor-pointer' >Sign In</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm
                ? "New to  Netflix? Sign Up Now"
                : "Alreaady Registered? Sign Up Now"}</p>
        </form>
    </div>
  )
}

export default Login