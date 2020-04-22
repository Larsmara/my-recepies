import React from "react";
import "./index.scss";
import Ingredient from "./ingredientItem";

const AddNewRecipe = ({
  handleChange,
  handleClear,
  handleIngredientChange,
  handleAddIngredient,
  handleRemove,
  handleBlur,
  ingredient,
  ingredients,
  errors,
  formState,
}) => {
  return (
    <div className='new-recipe-form'>
      <div className='form'>
        <div className='inputgroup'>
          <label htmlFor=''>Recipe Name</label>
          <input
            type='text'
            placeholder='Name of recipe'
            name='name'
            className={errors.name ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={formState.name}
          />
          <div className='form-error my-1'>{errors.name && "Please enter a name"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='inputCalories'>Calories</label>
          <input
            id='inputCalories'
            type='number'
            placeholder='Calories'
            min='1'
            max='3000'
            name='calories'
            className={errors.calories ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={formState.calories}
          />
          <div className='form-error my-1'>{errors.calories && "Please enter a number"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='inputCarbs'>Carbohydrates</label>
          <input
            id='inputCarbs'
            type='number'
            placeholder='Carbohydrates'
            min='0'
            max='1000'
            name='carbs'
            className={errors.carbs ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={formState.carbs}
          />
          <div className='form-error my-1'>{errors.carbs && "Please enter a number"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='inputProtein'>Protein</label>
          <input
            id='inputProtein'
            type='number'
            placeholder='Protein'
            min='0'
            max='1000'
            name='protein'
            className={errors.protein ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={formState.protein}
          />
          <div className='form-error my-1'>{errors.protein && "Please enter a number"}</div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='inputFat'>Fat</label>
          <input
            id='inputFat'
            type='text'
            placeholder='Fat'
            min='0'
            max='1000'
            name='fat'
            className={errors.fat ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleChange}
            value={formState.fat}
          />
          <div className='form-error my-1'>{errors.fat && "Please enter a number"}</div>
        </div>

        <div className='inputgroup ingredient-list'>
          <label htmlFor='inputIngredients'>Ingredients</label>
          <input
            id='inputIngredients'
            type='text'
            placeholder='Ingredients'
            value={ingredient}
            name='items'
            className={errors.items ? "input-error" : null}
            onBlur={handleBlur}
            onChange={handleIngredientChange}
          />
          <button className='btn btn-inside' onClick={handleAddIngredient}>
            Add Another
          </button>
          <div className='form-error my-1'>{errors.items && "Please add some ingredients"}</div>
          <div className='my-1'>
            {ingredients.map((item, index) => (
              <Ingredient key={index} handleRemove={handleRemove}>
                {item}
              </Ingredient>
            ))}
          </div>
        </div>

        <div className='inputgroup'>
          <label htmlFor='inputDescription'>Description</label>
          <textarea
            id='inputDescription'
            name='description'
            onChange={handleChange}
            className={errors.description ? "input-error" : null}
            onBlur={handleBlur}
            value={formState.description}
          ></textarea>
          <div className='form-error my-1'>{errors.description && "Please add a description"}</div>
        </div>

        <button className='btn btn-block my-2'>Add</button>
        <button className='btn btn-text btn-error btn-block' onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default AddNewRecipe;
