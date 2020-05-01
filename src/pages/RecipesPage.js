import React from "react";
import { Layout, RecipesList } from "../components";
import { connect } from "react-redux";

const RecipesPage = ({ recipes }) => {
  return (
    <Layout title='My Saved Recipes'>
      <RecipesList recipes={recipes} />
    </Layout>
  );
};

const mapState = (state) => ({
  recipes: state.data.recipes,
});

export default connect(mapState)(RecipesPage);
