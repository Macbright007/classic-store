import React, { useState, useEffect } from "react";
import Search from "../subcomponents/Search";
import { Link, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { Nav } from "./layoutStyles";

// import './Navbar.css';  // Assuming you have a CSS file for styling
const Navbar = () => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 150) {
        // Change 100 to the height you want
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollTop = window.scrollY;


  const gradientStyle = {
    transition: "background-color 0.3s ease",
    background:
      location.pathname === "/home" && scrolled
        ? "rgb(107 95 81)"
        : "linear-gradient(to right,  #b4ab80 50%, #4f4c41 50%)",
  };

  return (
    <Nav style={gradientStyle} $isScroll={scrolled}>
      <div className="innerNav genLayout">
        <div className="logoSide">
          <h1>H</h1>
          <Search />
        </div>

        <div className="leftSide">
          <div className="navItems">
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/products">product</Link>
            <Link to="/contact">contact</Link>
            <Link to="/cart">
              <GiShoppingCart className="shop" /> <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
