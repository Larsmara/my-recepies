import React from "react";
import { Route } from "react-router-dom";
import { AuthCheck } from "reactfire";
import LoginPage from "../../pages/LoginPage";
import LandingPage from "../../pages/LandingPage";
import "./index.scss";

const AnimatedRoute = ({ requiresAuth, children, ...other }) => {
  return (
    <Route {...other}>
      <div className='animated-route' key={other.path}>
        {requiresAuth ? (
          <AuthCheck fallback={<LoginPage />}>
            <LandingPage />
          </AuthCheck>
        ) : (
          children
        )}
      </div>
    </Route>
  );
};

export default AnimatedRoute;
