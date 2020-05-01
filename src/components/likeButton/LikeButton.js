import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { setFavorite, removeFavorite } from "../../redux/actions/dataActions";

const LikeButton = ({ authenticated, setFavorite, removeFavorite, recipe }) => {
  const isFavorite = () => {
    if (recipe.favorite) {
      return true;
    } else {
      return false;
    }
  };

  const setFavoriteRecipe = () => {
    setFavorite(recipe.recipeId);
  };

  const removeFavoriteRecipe = () => {
    removeFavorite(recipe.recipeId);
  };

  return (
    <>
      {!authenticated ? (
        <IconButton>
          <Link to='/login'>
            <FavoriteBorderIcon color='secondary' />
          </Link>
        </IconButton>
      ) : isFavorite() ? (
        <IconButton onClick={removeFavoriteRecipe}>
          <FavoriteIcon color='secondary' />
        </IconButton>
      ) : (
        <IconButton onClick={setFavoriteRecipe}>
          <FavoriteBorderIcon color='secondary' />
        </IconButton>
      )}
    </>
  );
};

LikeButton.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapState = (state) => ({
  authenticated: state.user.authenticated,
});

const mapDispatch = {
  setFavorite,
  removeFavorite,
};

export default connect(mapState, mapDispatch)(LikeButton);
