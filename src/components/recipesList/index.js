import React from "react";
import { Card } from "../";
import "./index.scss";

const GenerateMockCards = () => {
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} id={i} />);
  }
  return cards;
};

const RecipesList = () => {
  return (
    <div className='recipe-grid-list'>
      <GenerateMockCards />
    </div>
  );
};

export default RecipesList;
