import React from "react";
import { Layout, Card, RecipesList } from "../components";

const FavoritesPage = () => {
  return (
    <Layout title='My Favorite Recipes'>
      <RecipesList />
    </Layout>
  );
};

export default FavoritesPage;
