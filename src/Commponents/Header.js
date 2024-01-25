import React from 'react'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';






const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser);
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='Logo'>
        </img>
        {(auth.currentUser) && <div className='p-2'>
          <img className='w-12 h-12' alt='user_icon' src={auth.currentUser.photoURL}></img>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header