import React from "react";
import dayjs from "dayjs";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Components
import RecipeDialog from "../seeRecipe";
import LikeButton from "../likeButton/LikeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  divider: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  nutritionBold: {
    fontWeight: 600,
  },
}));

export default ({ recipe }) => {
  const classes = useStyles();
  const {
    name,
    calories,
    carbs,
    createdAt,
    description,
    fat,
    protein,
  } = recipe;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80'
          />
        }
        title={name}
        subheader={dayjs(createdAt).format("MMM YYYY")}
      />
      <CardMedia
        className={classes.media}
        image='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1531&q=80'
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p' className='mb-2'>
          <span className={classes.nutritionBold}>Calories</span> {calories}{" "}
          <span className={classes.nutritionBold}>Carbs</span> {carbs}{" "}
          <span className={classes.nutritionBold}>Fat</span> {fat}{" "}
          <span className={classes.nutritionBold}>Protein</span> {protein}
        </Typography>

        <Divider variant='middle' className={classes.divider} />

        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <LikeButton recipe={recipe} />
        {/* <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton> */}
        <RecipeDialog aria-label='show recipe' recipe={recipe}>
          See Recipe
        </RecipeDialog>
      </CardActions>
    </Card>
  );
};
