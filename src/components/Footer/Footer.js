import classes from "./Footer.module.css";
import React from "react";

function Footer(props) {
  return (
    <footer className={classes.Footer}>
      <div>
        <p>Serve 247 for excellence in baking</p>
        <a href="/">Bakery Paradise</a>
      </div>
      
    </footer>
  );
}

export default Footer;