import React, { useState } from "react";
import "./index.scss";
import Register from "./items/Register";
import Login from "./items/Login";
import { AiOutlineGoogle } from "react-icons/ai";
import { useAuth, useFirestore } from "reactfire";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const LoginForm = ({ authState, handleBlur, passwordMatch, handleChange, errors }) => {
  const [form, setForm] = useState(1);
  const auth = useAuth();

  let history = useHistory();

  const firestore = useFirestore();

  const handleFormChange = (form) => {
    setForm(form);
  };

  const handleSocialSignin = async () => {
    const user = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const userInfo = {
      uid: user.user.uid,
      name: user.user.displayName,
      photo: user.user.photoURL,
      email: user.user.email,
    };
    await firestore
      .collection("users")
      .doc(user.user.uid)
      .set(userInfo)
      .then(() => {
        history.push("/");
      });
  };

  const handleLogin = async (email, password) => {};

  const handleRegister = async () => {};

  return (
    <div className='login-form'>
      {form === 1 && (
        <Login
          handleFormChange={handleFormChange}
          handleChange={handleChange}
          authState={authState}
        />
      )}
      {form === 2 && (
        <Register
          handleFormChange={handleFormChange}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          authState={authState}
          passwordMatch={passwordMatch}
        />
      )}

      <hr className='hr-text' data-content='OR'></hr>

      <div className='center social-login'>
        <button className='btn btn-block btn-error' onClick={handleSocialSignin}>
          <span className='btn-icon-google'>
            <AiOutlineGoogle />
          </span>{" "}
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
