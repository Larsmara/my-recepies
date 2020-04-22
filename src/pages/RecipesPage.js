import React from "react";
import { Layout, RecipesList } from "../components";

const RecipesPage = () => {
  return (
    <Layout title='My Saved Recipes'>
      <RecipesList />
    </Layout>
  );
};

export default RecipesPage;
