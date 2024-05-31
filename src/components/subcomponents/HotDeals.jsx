import React from "react";
import { HotDealCont } from "./subCompStyles";
import { PiTagChevronFill } from "react-icons/pi";
import saleImgOne from "../../assists/kitchen.jpg"
import saleImgTwo from "../../assists/designn.png"
import saleImgThree from "../../assists/kitchen2.jpg"
import saleImgFour from "../../assists/banner.jpg"
import HotDealProducts from "./HotDealProducts";
import Products from "./Products";

const HotDeals = () => {
  return (
    <section className="genBg">
      <HotDealCont className="genLayout">
        <h1>
          our products <span>- hot deals</span>
        </h1>

        <div className="dealsWrapper">
          <div className="dealsCard">
            <div className="tag">
              <PiTagChevronFill className="saleIcon" />
              <span>20% off</span>
            </div>
            <img src={saleImgOne} alt="cloth" />
          </div>
          <div className="dealsCard">
            <div className="tag">
              <PiTagChevronFill className="saleIcon" />
              <span>30% off</span>
            </div>
            <img src={saleImgTwo} alt="cloth" />
          </div>
          <div className="dealsCard">
            <div className="tag">
              <PiTagChevronFill className="saleIcon" />
              <span>15% off</span>
            </div>
            <img src={saleImgThree} alt="cloth" />
          </div>
          <div className="dealsCard">
            <div className="tag">
              <PiTagChevronFill className="saleIcon" />
              <span>35% off</span>
            </div>
            <img src={saleImgFour} alt="cloth" />
          </div>
        </div>

        <HotDealProducts />
        <Products />
      </HotDealCont>
    </section>
  );
};

export default HotDeals;
