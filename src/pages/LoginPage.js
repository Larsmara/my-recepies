import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Login } from "../components";
import { loginUser, signupUser } from "../redux/actions/userActions";

const LoginPage = ({ loginUser, ui, signupUser }) => {
  const history = useHistory();
  const { loading, errors } = ui;
  const [authState, setAuthState] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAuthState({ ...authState, [name]: value });
  };

  useEffect(() => {
    if (errors) setAuthState({ ...authState, errors });
  }, [errors]);

  const handleClearForm = () => {
    setAuthState({
      username: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    loginUser({ email: authState.email, password: authState.password }, history);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    const user = {
      email: authState.email,
      password: authState.password,
      confirmPassword: authState.confirmPassword,
      username: authState.username,
    };
    signupUser(user, history);
  };

  return (
    <Layout>
      <Login
        authState={authState}
        handleClearForm={handleClearForm}
        handleChange={handleFormChange}
        errors={authState.errors}
        onSubmitLogin={onSubmitLogin}
        onSubmitRegister={onSubmitRegister}
        loading={loading}
      />
    </Layout>
  );
};

LoginPage.propTypes = {
  ui: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  ui: state.ui,
});

const mapDispatch = {
  loginUser,
  signupUser,
};

export default connect(mapState, mapDispatch)(LoginPage);
