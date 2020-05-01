import React from "react";
import { Card } from "../";
import "./index.scss";
// MUI stuff
import GridList from "@material-ui/core/GridList";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
}));

const RecipesList = ({ recipes }) => {
  const classes = useStyles();
  console.log(recipes);

  return (
    <GridList className={classes.root} cols={3} spacing={6}>
      {recipes.map((item) => (
        <Card key={item.name} recipe={item} />
      ))}
    </GridList>
  );
};

export default RecipesList;
