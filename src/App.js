import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { AnimatedRoute } from "./components";
import { useUser, useUserById, useUserRef } from "./hooks";

const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NewRecipePage = React.lazy(() => import("./pages/NewRecipePage"));
const RecipesPage = React.lazy(() => import("./pages/RecipesPage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const SeeRecipe = React.lazy(() => import("./pages/RecipePage"));

const App = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <AnimatedRoute exact path='/new' requiresAuth>
        <NewRecipePage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/recipe/:id' requiresAuth>
        <SeeRecipe />
      </AnimatedRoute>
      <AnimatedRoute exact path='/favorites' requiresAuth>
        <FavoritesPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/user/:id' requiresAuth>
        <UserPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/login'>
        <LoginPage />
      </AnimatedRoute>
      <AnimatedRoute exact path='/' requiresAuth>
        <RecipesPage />
      </AnimatedRoute>
    </Switch>
  );
};

export default App;
