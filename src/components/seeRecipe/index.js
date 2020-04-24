import React from "react";
import "./index.scss";
import { BsStar } from "react-icons/bs";

const SeeRecipe = () => {
  return (
    <div className='flex-center pt-2 seeRecipe'>
      <div id='recipe-container'>
        <header>
          <h1 className='pb-2 head'>
            Recipe Name{" "}
            <span className='icon'>
              <BsStar />
            </span>
          </h1>

          <div className='header-image'>
            <img src='https://source.unsplash.com/random' alt='' />
          </div>
        </header>

        <section id='information' className='pt-2'>
          <div>
            <h2>Nutrition</h2>
            <ul className='pt-1'>
              <li>550 Calories</li>
              <li>Carbohydrates</li>
              <li>Fat</li>
              <li>Protein</li>
            </ul>
          </div>
          <div>
            <h2>Easyness</h2>
            <ul className='pt-1'>
              <li>4 Ingredients </li>
              <li>Fairly easy to make</li>
            </ul>
          </div>
        </section>

        <section id='description' className='pt-2'>
          <h2>Description</h2>
          <p className='pt-1'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ipsum, expedita
            deserunt corrupti porro mollitia asperiores obcaecati ratione blanditiis molestiae vitae
            tempora recusandae cum aspernatur, totam voluptate perspiciatis praesentium. Enim vero
            delectus odit voluptatem possimus dolore reprehenderit magni provident, dignissimos eius
            maiores atque iusto neque ducimus nemo accusamus perspiciatis fugiat laborum
            repellendus! Temporibus voluptates veritatis rerum sapiente? Impedit aut deserunt dicta
            quod molestiae, libero ut temporibus, quam voluptatum tenetur omnis necessitatibus odio
            dolore veritatis quia earum quasi eaque odit inventore.
          </p>
        </section>

        <section id='steps' className='my-2'>
          <h2>Directions</h2>
          <ul className='mt-2'>
            <li>
              <div className='direction-step'>1</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta asperiores et
                numquam obcaecati explicabo odit.
              </p>
            </li>
            <li>
              <div className='direction-step'>2</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta asperiores et
                numquam obcaecati explicabo odit.
              </p>
            </li>
            <li>
              <div className='direction-step'>3</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta asperiores et
                numquam obcaecati explicabo odit.
              </p>
            </li>
          </ul>
        </section>

        {/* <section id='comments' className='mt-2'>
          <h2>Comments</h2>
        </section> */}
      </div>
    </div>
  );
};

export default SeeRecipe;
