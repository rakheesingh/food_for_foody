import React from "react";
import Logo from "app/assests/images/Logo.jpg"
import './index.css';  

const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="header__img" src = {Logo} />

       <div className="navBar">
         <div className="navItem">Home</div>
         <div className="navItem">About Us</div>
         <div className="navItem">Cart</div>
       </div>
    </div>
  );
};

export default HeaderComponent;
