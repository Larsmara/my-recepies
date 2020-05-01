import React, { useState } from "react";
import { Layout, AddNewRecipe } from "../components";

const NewRecipePage = () => {
  const [formState, setFormState] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    description: "",
    errors: {}
  });

  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleIngredientChange = (e) => {
    const { value } = e.target;
    setIngredient(value);
  };

  const handleAddIngredient = () => {
    if (ingredient !== "") {
      setIngredients([...ingredients, ingredient]);
      setTimeout(() => setIngredient(""), 200);
    } else {
      alert("Enter ingredient to add");
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleClearForm = () => {
    setFormState({
      name: "",
      calories: "",
      carbs: "",
      protein: "",
      fat: "",
      description: "",
      errors: {}
    });
    setIngredients([]);
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
      />
    </Layout>
  );
};

export default NewRecipePage;
