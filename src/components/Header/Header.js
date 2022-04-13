import "./Header.css";
import headerImage from "../../assets/header-img1.jpg";
import React from "react";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <div className="Container">
        <h1>Making sweet things happen. <br /> We create delicious memories.</h1>
        <p>Freshly baked Everyday.</p>
      </div>
    </header>
  );
}

export default Header;