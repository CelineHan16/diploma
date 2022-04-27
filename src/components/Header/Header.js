import "./Header.css";
import React from "react";

function Header({ image, title, children }) {

  return (
    <header className="Header">
      <img src={image} alt="img" />
      <section className="Container">
        <div className="blur">
          <h1>{title}</h1>
          <p>{children}</p>
        </div>
      </section>
    </header>
  );
}

export default Header;