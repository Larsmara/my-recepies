import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MoreButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <AddIcon />
  </IconButton>
);

const AddNewRecipe = ({
  handleChange,
  handleClear,
  handleIngredientChange,
  handleAddIngredient,
  handleRemove,
  ingredient,
  ingredients,
  formState,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <div className={classes.paper}>
        <Typography variant='h2' color='textPrimary' component='h2'>
          Add a new recipe!
        </Typography>
        <form noValidate>
          <TextField
            id='inputName'
            type='text'
            placeholder='Recipe name'
            name='name'
            label='Recipe name'
            onChange={handleChange}
            value={formState.name}
            fullWidth
            error={formState.errors.name ? true : false}
            helperText={formState.errors.name}
            className={classes.submit}
          />

          <TextField
            id='inputCalories'
            type='number'
            placeholder='Calories'
            min='1'
            max='3000'
            name='calories'
            label='Calories'
            onChange={handleChange}
            value={formState.calories}
            fullWidth
            error={formState.errors.calories ? true : false}
            helperText={formState.errors.calories}
          />

          <TextField
            id='inputCarbs'
            type='number'
            placeholder='Carbohydrates'
            min='0'
            max='1000'
            name='carbs'
            label='Carbohydrates'
            onChange={handleChange}
            value={formState.carbs}
            fullWidth
            error={formState.errors.carbs ? true : false}
            helperText={formState.errors.carbs}
            className={classes.submit}
          />

          <TextField
            id='inputProtein'
            type='number'
            placeholder='Protein'
            min='0'
            max='1000'
            name='protein'
            label='Proteins'
            onChange={handleChange}
            value={formState.protein}
            fullWidth
            error={formState.errors.protein ? true : false}
            helperText={formState.errors.protein}
          />

          <TextField
            id='inputFat'
            type='text'
            placeholder='Fat'
            min='0'
            max='1000'
            name='fat'
            label='Fat'
            onChange={handleChange}
            value={formState.fat}
            fullWidth
            error={formState.errors.fat ? true : false}
            helperText={formState.errors.fat}
            className={classes.submit}
          />

          <TextField
            id='inputIngredients'
            type='text'
            placeholder='Ingredients'
            value={ingredient}
            name='items'
            label='Ingredients'
            fullWidth
            error={formState.errors.ingredients ? true : false}
            helperText={formState.errors.ingredients}
            onChange={handleIngredientChange}
            InputProps={{ endAdornment: <MoreButton onClick={handleAddIngredient} /> }}
          />
          <div className={classes.chips}>
            {ingredients.map((item, index) => (
              <Chip label={item} onDelete={handleRemove} color='primary' />
            ))}
          </div>

          <TextField
            id='inputDescription'
            name='description'
            label='Description'
            onChange={handleChange}
            value={formState.description}
            fullWidth
            multiline
            rows={3}
            error={formState.errors.fat ? true : false}
            helperText={formState.errors.fat}
            className={classes.submit}
          />

          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
            className={classes.submit}
          >
            Add
          </Button>
          <Button color='secondary' fullWidth onClick={handleClear}>
            Clear
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default AddNewRecipe;
