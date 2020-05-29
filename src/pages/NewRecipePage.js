import React, { useState, useEffect } from "react";
import { AddNewRecipe, Layout } from "../components";
import { connect } from "react-redux";
import { postRecipe } from "../redux/actions/dataActions";

const NewRecipePage = ({ postRecipe, ui }) => {
  const [formState, setFormState] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    directions: "",
    description: "",
    errors: {},
  });
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({
    ingredientName: "",
    ingredientAmount: "",
  });

  useEffect(() => {
    if (ui.errors) {
      setFormState({ ...formState, errors: ui.errors });
    }
    if (!ui.errors) setFormState({ ...formState, errors: {} });
  }, [ui.errors]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setIngredient({ ...ingredient, [name]: value });
  };

  const handleAddIngredient = () => {
    if (ingredient !== "") {
      setIngredients([...ingredients, ingredient]);
      setTimeout(() => setIngredient({ ingredientName: "", ingredientAmount: "" }), 200);
    } else {
      alert("Enter ingredient to add");
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item.ingredientName !== ingredient));
  };

  const handleClearForm = () => {
    setFormState({
      name: "",
      calories: "",
      carbs: "",
      protein: "",
      fat: "",
      description: "",
      directions: "",
      errors: {},
    });
    setIngredients([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: formState.name,
      calories: formState.calories,
      carbs: formState.carbs,
      protein: formState.protein,
      fat: formState.fat,
      directions: formState.directions.split("\n"),
      description: formState.description,
      ingredients,
    };

    postRecipe(newRecipe, (message) => {
      if (message === "success") {
        handleClearForm();
      } else {
        console.log("error");
      }
    });
  };

  return (
    <Layout>
      <AddNewRecipe
        handleChange={handleFormChange}
        handleIngredientChange={handleIngredientChange}
        handleAddIngredient={handleAddIngredient}
        ingredient={ingredient}
        ingredients={ingredients}
        handleRemove={handleRemoveIngredient}
        errors={formState.touched}
        formState={formState}
        handleClear={handleClearForm}
        handleSubmit={handleSubmit}
        loading={ui.loading}
      />
    </Layout>
  );
};

const mapState = (state) => ({
  ui: state.ui,
});

const mapDispatch = {
  postRecipe,
};

export default connect(mapState, mapDispatch)(NewRecipePage);
