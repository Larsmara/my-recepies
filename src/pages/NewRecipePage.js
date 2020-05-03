import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { AddNewRecipe, Layout } from '../components';

const NewRecipePage = () => {
  const [formState, setFormState] = useState({
    name: '',
    calories: '',
    carbs: '',
    protein: '',
    fat: '',
    description: '',
    errors: {}
  });

  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({
    ingredientName: '',
    ingredientAmount: ''
  });

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleIngredientChange = e => {
    const { name, value } = e.target;
    setIngredient({ ...ingredient, [name]: value });
  };

  const handleAddIngredient = () => {
    if (ingredient !== '') {
      setIngredients([...ingredients, ingredient]);
      setTimeout(() => setIngredient({ ingredientName: '', ingredientAmount: '' }), 200);
    } else {
      alert('Enter ingredient to add');
    }
  };

  const handleRemoveIngredient = ingredient => {
    setIngredients(ingredients.filter(item => item.ingredientName !== ingredient));
  };

  const handleClearForm = () => {
    setFormState({
      name: '',
      calories: '',
      carbs: '',
      protein: '',
      fat: '',
      description: '',
      errors: {}
    });
    setIngredients([]);
  };

  return (
    <Layout>
      <AddNewRecipe
        editorState={editorState}
        setEditorState={setEditorState}
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
