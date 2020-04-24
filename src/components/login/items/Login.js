import React from "react";

const Login = ({ handleFormChange, handleChange, authState }) => {
  return (
    <div className='animated bounceInLeft fast'>
      <h1 className='my-2'>Log In To Start Using This App</h1>
      <form>
        <div className='inputgroup'>
          <label htmlFor='loginEmail'>Email</label>
          <input
            id='loginEmail'
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={authState.email}
          />
        </div>

        <div className='inputgroup'>
          <label htmlFor='loginPassword'>Password</label>
          <input
            id='loginPassword'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={authState.password}
          />
        </div>

        <button className='btn btn-block'>Log In</button>
      </form>

      <div className='register-text center'>
        <button className='btn btn-text btn-block my-2' onClick={() => handleFormChange(2)}>
          Don't have an account? Register!
        </button>
      </div>
    </div>
  );
};

export default Login;
