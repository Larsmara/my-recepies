import React from "react";
import "./index.scss";

const Ingredient = ({ children, handleRemove }) => {
  return (
    <div className='ingredient-item'>
      <span>{children}</span>{" "}
      <i className='fas fa-times' onClick={() => handleRemove(children)}></i>
    </div>
  );
};

export default Ingredient;
