import React from "react";
import { ItemCard } from "./subCompStyles";

const ProductCard = ({ product }) => {
    const shortTitle = product.title.substring(0, 20);

  return (
    <ItemCard>
      <img src={product.image} alt="food" />

      <div class="card__content">
        <h4>{shortTitle}</h4>
        <p>category: {product.category}</p>
        <h2>${product.price}</h2>

        <span>+</span>
      </div>
    </ItemCard>
  );
};

export default ProductCard;
