import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { ProductCard } from './subCompStyles';


const HotDealProductCard = ({product}) => {
  return (
    <ProductCard key={product.id}>
       <img src={product.img} alt="bg" />
        <div className="hotdealContent">
          <h1>{product.title}</h1>
          <p>{product.desc}</p>

          <h4>price: ${product.price}</h4>

          <span>buy now <FaArrowRightLong /></span>
        </div>
    </ProductCard>
  )
}

export default HotDealProductCard