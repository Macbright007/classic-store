import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import { ProductItems } from "./subCompStyles";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <ProductItems>
      <h1>products</h1>

      <div className="productWrapper">
        {products?.map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </div>
    </ProductItems>
  );
};

export default Products;
