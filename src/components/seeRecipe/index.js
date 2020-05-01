import React from "react";
import dayjs from "dayjs";
// Components
import LikeButton from "../likeButton/LikeButton";
// MUI stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Avatar, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
  dialogInner: {
    padding: "25px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  nutritionBold: {
    fontWeight: 600,
  },
  description: {
    marginTop: "15px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {},
  ingredients: {
    textTransform: "capitalize",
  },
  iconHover: {
    cursor: "pointer",
    "&:hover": {
      color: "#ff3d00",
    },
  },
}));

const SeeRecipe = ({ recipe }) => {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const {
    name,
    calories,
    carbs,
    createdAt,
    description,
    fat,
    protein,
    username,
    ingredients,
  } = recipe;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant='outlined' style={{ marginLeft: "auto" }}>
        See recipe
      </Button>

      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose} fullScreen={fullScreen}>
        <div className={classes.dialogInner}>
          <CardHeader
            avatar={
              <Avatar
                aria-label='recipe'
                src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80'
              />
            }
            title={
              <div className={classes.header}>
                <Typography variant='h5'>{name}</Typography>
                <LikeButton recipe={recipe} />
              </div>
            }
            subheader={`Created ${dayjs(createdAt).format("MMM YYYY")}, by ${username}`}
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

            <Typography variant='h6' className={classes.description}>
              Description
            </Typography>

            <Typography variant='body1' color='textSecondary' component='p'>
              {description}
            </Typography>

            <Typography variant='h6' className={classes.description}>
              Ingredients
            </Typography>
            <ul>
              {ingredients.map((item) => (
                <li key={item} className={classes.item}>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    className={classes.ingredients}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>

            {!recipe.directions && (
              <>
                <Typography variant='h6' className={classes.description}>
                  Directions
                </Typography>
                <ol>
                  <li>Whisp</li>
                </ol>
              </>
            )}
          </CardContent>
          <DialogActions>
            <Button color='primary' onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default SeeRecipe;
