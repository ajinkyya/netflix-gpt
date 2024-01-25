import React, { useRef, useState } from 'react'
import Header from './Header'
import {chckValidData} from '../Utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';

const Login = () => {
    const [isSignInForm,setisSignInForm] = useState(true);
    const [errMsg,setErrMsg] = useState(null);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    } 

    const handleButtonClick = () => {
       const message = chckValidData(email.current.value,password.current.value);
       setErrMsg(message);
       if(message) return;
       if(!isSignInForm)
       {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/D4D35AQHvHQqIJWvXNw/profile-framedphoto-shrink_400_400/0/1695277040721?e=1706778000&v=beta&t=bzKPIWLa6sAQLhOBiRIaPZvSTFdZfyxNsc4bGsbIJKM"
              }).then(() => {
                const {uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL:photoURL}));
                navigate("/browse")
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode + errorMessage);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + errorMessage);
            // ..
          });
       }
       else
       {
        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + errorMessage);
          });
        
       }
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg'
                alt='Background'></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()}  className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl p-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {
                !isSignInForm && <input ref={name} type='text' placeholder='Enter Your Name' className='p-2 m-2 w-full bg-gray-700'></input>
            }
            <input ref={email} type='email' placeholder='Email Address' className='p-2 m-2 w-full bg-gray-700 '></input>
            <input ref={password} type ='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'></input>
            <p className='text-red-700 font-bold text-lg p-2'>{errMsg}</p>
            <button className='py-2 m-2 bg-red-700 w-full cursor-pointer' onClick={handleButtonClick}>Sign In</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm
                ? "New to  Netflix? Sign Up Now"
                : "Alreaady Registered? Sign Up Now"}</p>
        </form>
    </div>
  )
}

export default Login