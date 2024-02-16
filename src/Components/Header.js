import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import {togglGptSearchView} from "../Utils/gptSlice"
import { LOGO } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch)
  const user = useSelector((store) => store.user);
  const handleToggle = () => {
    dispatch(togglGptSearchView());
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleToggle}>{(gptSearchView)?'Movie Search':'GPT Search'}</button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;