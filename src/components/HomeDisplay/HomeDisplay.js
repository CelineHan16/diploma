import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import { getCategories } from "../../data/categories";
import classes from "./HomeDisplay.module.css";

function HomeDisplay() {
  return (
    <>
      <div className={classes.HomeDisplay}>
        <div className={classes.container}>
          
        </div>
      </div>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default HomeDisplay;