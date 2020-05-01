import React from "react";
import { Route, Redirect } from "react-router-dom";

const AnimatedRoute = ({ requiresAuth, authenticated, children, ...other }) => {
  return (
    <Route {...other}>
      <div className='animated fadeIn fast' key={other.path}>
        {authenticated ? children : <Redirect to='/login' />}
      </div>
    </Route>
  );
};

export default AnimatedRoute;
