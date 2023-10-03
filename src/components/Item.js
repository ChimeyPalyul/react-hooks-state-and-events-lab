import React, {useState} from "react";

function Item({ name, category }) {
  const[isInCart, setIsInCart] = useState(false);

  function handleAddToCart(){
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : "null"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isInCart ? "Remove" : "Add"}
        onClick={handleAddToCart}
      >
        {isInCart ? "Remove From" : "Add To"} Cart 
        </button>
    </li>
  );
}

export default Item;
