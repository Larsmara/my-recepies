import React from "react";
import { Layout, RecipesList } from "../components";
import { connect } from "react-redux";

const FavoritesPage = ({ favorites }) => {
  console.log(favorites);
  return (
    <Layout title='My Favorite Recipes'>
      <RecipesList recipes={favorites} />
    </Layout>
  );
};

const mapState = (state) => ({
  favorites: state.data.recipes.filter((item) => item.favorite === true),
});

export default connect(mapState)(FavoritesPage);
