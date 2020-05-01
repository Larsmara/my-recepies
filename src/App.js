import React from "react";
import PropTypes from "prop-types";
import { Switch, useLocation } from "react-router-dom";
import { AnimatedRoute } from "./components";
import { connect } from "react-redux";

const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NewRecipePage = React.lazy(() => import("./pages/NewRecipePage"));
const RecipesPage = React.lazy(() => import("./pages/RecipesPage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const SeeRecipe = React.lazy(() => import("./pages/RecipePage"));

const App = ({ authenticated }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <AnimatedRoute exact path='/new' requiresAuth authenticated={authenticated}>
        <NewRecipePage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/recipe/:id' requiresAuth authenticated={authenticated}>
        <SeeRecipe />
      </AnimatedRoute>
      <AnimatedRoute exact path='/favorites' requiresAuth authenticated={authenticated}>
        <FavoritesPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/user/:id' requiresAuth authenticated={authenticated}>
        <UserPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/login'>
        <LoginPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/' requiresAuth authenticated={authenticated}>
        <RecipesPage />
      </AnimatedRoute>
    </Switch>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapState)(App);
