import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import classes from "./AuthDisplay.module.css";
import image from "../../assets/header-img.jpg"

export default function AuthDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin'
    }));

    navigate('/');
  }

  return (
    <div className={classes.Auth}>
      <img src={image} alt="Auth" />
      <form onSubmit={onAuthStart}>
        <h1>Sign in</h1>
        <p>Create an account to access your profile info, order history and more.</p>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>

        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}