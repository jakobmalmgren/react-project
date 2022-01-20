import { GiHearts } from "react-icons/gi";
import { useState } from "react";
const Recipe = ({ title, image, ingredients }) => {
  const [liked, setLiked] = useState(false);
  const likedHeart = () => {
    setLiked(!liked);
  };
  return (
    <div className="foodwrapper">
      <h1>{title}</h1>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>

      <img src={image} alt="" />
      <GiHearts className={liked ? "red" : ""} onClick={() => likedHeart()} />
    </div>
  );
};

export default Recipe;
