import React from "react";
import Navbar from "../layout/Navbar";
import { HeaderWrapper } from "./subCompStyles";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); 

  return (
    <HeaderWrapper>
      <Navbar />
      {location.pathname === "/home" ? (
        <div className="headerSec">
          <div className="leftSide">
            <Banner />
          </div>
          <div className="rightSide"></div>
        </div>
      ) : (
        <div className="path">
          <h1>{location.pathname.replace(/\//g, " ")}</h1>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
