import React from "react";
import { Route } from "react-router-dom";
import { AuthCheck } from "reactfire";
import LoginPage from "../../pages/LoginPage";
import LandingPage from "../../pages/LandingPage";
import "./index.scss";

const AnimatedRoute = ({ requiresAuth, children, ...other }) => {
  return (
    <Route {...other}>
      <div className='animated fadeIn fast' key={other.path}>
        {requiresAuth ? <AuthCheck fallback={<LoginPage />}>{children}</AuthCheck> : children}
      </div>
    </Route>
  );
};

export default AnimatedRoute;
