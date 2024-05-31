import React from "react";
import { BannerWrapper } from "./subCompStyles";

const Banner = () => {
  return (
    <BannerWrapper>
      <h1>discover the perfect piece to compliment your attire / dressing</h1>

      <p>from simple and casual ware to native and cutural ware, our fashion collection has everything you need to look elegant. made with the highest quality materials and expert craftsmanship and stylist, our clothing brand is built to leave a long lasting impression.</p>

      <div className="btnGroup">
        <button>shop now</button>
        <button>explore</button>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
