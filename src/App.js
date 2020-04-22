import React from "react";
import { Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatedRoute } from "./components";

const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NewRecipePage = React.lazy(() => import("./pages/NewRecipePage"));
const RecipesPage = React.lazy(() => import("./pages/RecipesPage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));

const App = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <AnimatedRoute exact path='/new' requiresAuth={false}>
        <NewRecipePage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/favorites' requiresAuth={false}>
        <FavoritesPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/user' requiresAuth={false}>
        <UserPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/login'>
        <LoginPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/' requiresAuth={false}>
        <RecipesPage />
      </AnimatedRoute>
    </Switch>
  );
};

export default App;
