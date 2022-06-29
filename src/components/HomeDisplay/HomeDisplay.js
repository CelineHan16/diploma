import React from "react";
import { Link } from "react-router-dom";
import classes from "./HomeDisplay.module.css";
import holiday from "../../assets/holidayImage.webp";
import gifting from "../../assets/giftingImage.webp";
import entertain from "../../assets/entertainWithUsImage.webp";
import CategoryList from "../CategoryList/CategoryList";
import { getCategories } from "../../data/categories";

function HomeDisplay() {
  return (
    <>
      <div className={classes.HomeDisplay}>
        <div className={classes.container}>
          <div>
            <h1>A delectable journey of mystery and desire</h1>
            <Link to="./shop">
              <button className={classes.discoverButton}>Discover Now</button>
            </Link>
            <div className={classes.first_section}>
              <span>
                <img src={holiday} alt="Holiday" />
                <h4>Holiday</h4>
                <p>celebrate special occasions with our exclusive creations</p>
              </span>
              <span>
                <img src={entertain} alt="Entertain" />
                <h4>Gifting</h4>
                <p>Say it with love and Bakery Paradise</p>
              </span>
              <span>
                <img src={gifting} alt="Gifting" className={classes.gifting} />
                <h4>Entertain with us</h4>
                <p>Set the table, set the mood</p>
              </span>
            </div>
            <div className={classes.second_section}>
              <h4>Shop by occasion</h4>
              <h3>Need inspiration find the perfect gift for any occasion with personalized bundles </h3>
              <CategoryList categories={getCategories()} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HomeDisplay;