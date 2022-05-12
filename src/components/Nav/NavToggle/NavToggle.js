import React from "react";
import classes from "./NavToggle.module.css";

function NavToggle() {
  return (
    <button className={classes.NavToggle}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </button>
  );
}

export default NavToggle;