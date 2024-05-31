import React from "react";
import { products } from "../../Data";
import HotDealProductCard from "./HotDealProductCard";

const HotDealProducts = () => {
  return (
    <div>
      {products[0].hotDeals.map((item) => {
        return <HotDealProductCard product={item} key={item.id} />;
      })}
    </div>
  );
};

export default HotDealProducts;
