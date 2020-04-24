import React from "react";
import "./index.scss";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ recipe, id }) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <img src='https://source.unsplash.com/random' alt='' />
      </header>

      <main className='card-content'>
        <h2 className='card-title'>Title</h2>

        <div className='nutrients'>
          <div className='calories'>
            <i className='far fa-angry'></i>
            <span>650</span>
          </div>

          <div className='carbs'>
            <i className='far fa-angry'></i>
            <span>265</span>
          </div>

          <div className='proteins'>
            <i className='far fa-smile-beam'></i>
            <span>265</span>
          </div>

          <div className='fat'>
            <i className='far fa-angry'></i>
            <span>265</span>
          </div>
        </div>

        <div className='ingredients'>
          <div className='number-of-ingredients'>
            <i className='fas fa-book-open'></i>
            <span>Ingredients: 7</span>
          </div>

          <div className='complexity'>
            <i className='fas fa-signal'></i>
            <span>Difficulty: 4</span>
          </div>
        </div>

        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sequi dignissimos,
            impedit rem deserunt, sapiente eligendi nesciunt obcaecati corrupti debitis nihil.
            Quibusdam illum officia pariatur alias neque quia aliquam enim, quidem dolor rem
            corporis a. Cumque corporis atque magnam nobis?
          </p>
        </div>
      </main>

      <footer className='card-footer'>
        <div className='set-favorite'>{recipe && recipe.starred ? <BsStarFill /> : <BsStar />}</div>
        <Link className='view-recipe btn btn-primary' to={`/recipe/${id}`}>
          View Recipe
        </Link>
      </footer>
    </div>
  );
};

export default Card;
