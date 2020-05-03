import React from 'react';
import { Route } from 'react-router-dom';

const AnimatedRoute = ({ requiresAuth, authenticated, children, ...other }) => {
  return (
    <Route {...other}>
      <div className='animated fadeIn fast' key={other.path}>
        {children}
      </div>
    </Route>
  );
};

export default AnimatedRoute;
