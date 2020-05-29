import React, { useEffect, Suspense } from "react";
import { Layout, RecipesList } from "../components";
import { connect } from "react-redux";
import { getRecipes } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

const RecipesPage = ({ recipes, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Layout title='My Saved Recipes'>
      {recipes && recipes.length === 0 && (
        <p>
          There are no recipes yet, start adding them <Link to='/new'>here</Link>
        </p>
      )}
      <Suspense fallback={<p>loading</p>}>
        <RecipesList recipes={recipes} />
      </Suspense>
    </Layout>
  );
};

const mapState = (state) => ({
  recipes: state.data.recipes,
});

const mapDispatch = {
  getRecipes,
};

export default connect(mapState, mapDispatch)(RecipesPage);
