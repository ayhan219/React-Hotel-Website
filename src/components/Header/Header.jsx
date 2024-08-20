import React, { useState, useEffect } from "react";
import "./Header.css";
import headerImg1 from "../../assets/hotel3.jpg";
import headerImg2 from "../../assets/hotel4.jpg";
import headerImg3 from "../../assets/hotel5.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  

 

  return (
    <div className="header-container">
      <div className="header-left">
        <div className="header-explanation">
          <h2>
            This is the <span>best</span> location!
          </h2>
          <h2>Discover More!</h2>
        </div>
        <div className="header-buttons">
          <Link to={"/rooms"}><button>Explore more</button></Link>
          <Link to={"/contact"}><button>Contact us</button></Link>
        </div>
      </div>
      <div className="header-right">
       
      </div>
    </div>
  );
};

export default Header;
