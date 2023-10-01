import React from "react";
import "../Css/Login.css";
import { auth, provider } from "../Components/Firebase/Firebase";
import { useDispatch } from "react-redux";
import { SignIn } from "../Store/UserSlice";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const LoginHandler = () => {
    signInWithPopup(auth,provider) // Use signInWithPopup for popup-based authentication
      .then(({user}) => {
        
        dispatch(
          SignIn({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <h1>Welcome to Mail Box</h1>
      <div className="login_img">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.tbYslWBvkcYLN2qBVFt5QQHaGh&pid=Api&rs=1&c=1&qlt=95&w=135&h=118"
          alt="logo"
          className="logo"
        />
        <button className="login_btn" onClick={LoginHandler}>
          Login to Mail Box
        </button>
      </div>
    </div>
  );
};

export default Login;
