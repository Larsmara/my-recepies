import React from "react";
import {
  AuthCheck,
  StorageImage,
  useFirestoreDocData,
  useUser,
  useAuth,
  useFirestore,
} from "reactfire";

const Register = ({
  handleFormChange,
  errors,
  handleChange,
  handleBlur,
  authState,
  passwordMatch,
}) => {
  return (
    <div className='animated bounceInLeft fast'>
      <h1 className='my-2'>Register To Start Using This App</h1>
      <form>
        <div className='inputgroup'>
          <label htmlFor='registerUsername'>Username</label>
          <input
            id='registerUsername'
            type='text'
            placeholder='Username'
            name='username'
            className={errors.username ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={authState.username}
          />
          <div className='form-error my-1'>{errors.username && "Please enter a username"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='registerName'>Name</label>
          <input
            id='registerName'
            type='text'
            placeholder='Name'
            name='name'
            className={errors.name ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={authState.name}
          />
          <div className='form-error my-1'>{errors.name && "Please enter a name"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='registerEmail'>Email</label>
          <input
            id='registerEmail'
            type='email'
            placeholder='Email'
            name='email'
            className={errors.email ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={authState.email}
          />
          <div className='form-error my-1'>{errors.email && "Please enter an email"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='registerPassword'>Password</label>
          <input
            id='registerPassword'
            type='password'
            placeholder='Password'
            name='password'
            className={errors.password ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={authState.password}
          />
          <div className='form-error my-1'>{errors.password && "Enter a password"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='registerPasswordConfirm'>Confirm Password</label>
          <input
            id='registerPasswordConfirm'
            type='password'
            placeholder='Confirm Password'
            name='password2'
            className={!passwordMatch ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={authState.password2}
          />
          <div className='form-error my-1'>{!passwordMatch && "Passwords does not match"}</div>
        </div>

        <button className='btn btn-block'>Register</button>
      </form>

      <div className='register-text center'>
        <button className='btn btn-text btn-block my-2' onClick={() => handleFormChange(1)}>
          Already have an account? Sign in!
        </button>
      </div>
    </div>
  );
};

export default Register;
