import React, { useState } from "react";
import { Layout, Login } from "../components";

const LoginPage = () => {
  const [authState, setAuthState] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    password2: "",
    touched: {
      username: false,
      name: false,
      email: false,
      password: false,
      password2: false,
    },
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAuthState({ ...authState, [name]: value });
  };

  const passwordMatch = () => {
    if (authState.password === authState.password2) {
      return true;
    } else {
      return false;
    }
  };

  const handleClearForm = () => {
    setAuthState({
      username: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      touched: {
        username: false,
        name: false,
        email: false,
        password: false,
        password2: false,
      },
    });
  };

  const handleBlur = (e) => {
    if (e.target.value === undefined || e.target.value === "") {
      setAuthState({
        ...authState,
        touched: { ...authState.touched, [e.target.name]: true },
      });
    } else if (e.target.value) {
      setAuthState({
        ...authState,
        touched: { ...authState.touched, [e.target.name]: false },
      });
    }
  };

  return (
    <Layout>
      <Login
        authState={authState}
        handleBlur={handleBlur}
        handleClearForm={handleClearForm}
        handleChange={handleFormChange}
        errors={authState.touched}
        passwordMatch={passwordMatch}
      />
    </Layout>
  );
};

export default LoginPage;
