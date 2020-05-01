import React, { useState } from "react";
import "./index.scss";
import Register from "./items/Register";
import Login from "./items/Login";
// MUI stuff
import Grid from "@material-ui/core/Grid";

const LoginForm = ({
  authState,
  handleChange,
  errors,
  onSubmitLogin,
  loading,
  onSubmitRegister,
}) => {
  const [form, setForm] = useState(1);

  const handleFormChange = (form) => {
    setForm(form);
  };

  return (
    <Grid container justify='center'>
      {form === 1 && (
        <Login
          handleFormChange={handleFormChange}
          handleChange={handleChange}
          authState={authState}
          onSubmitLogin={onSubmitLogin}
          errors={errors}
          loading={loading}
        />
      )}
      {form === 2 && (
        <Register
          handleFormChange={handleFormChange}
          errors={errors}
          handleChange={handleChange}
          authState={authState}
          loading={loading}
          onSubmitRegister={onSubmitRegister}
        />
      )}

      {/* <hr className='hr-text' data-content='OR'></hr>

      <div className='center social-login'>
        <button className='btn btn-block btn-error' onClick={handleSocialSignin}>
          <span className='btn-icon-google'>
            <AiOutlineGoogle />
          </span>{" "}
          Sign in with google
        </button>
      </div> */}
    </Grid>
  );
};

export default LoginForm;
