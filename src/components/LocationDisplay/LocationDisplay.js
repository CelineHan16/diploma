import React from "react";
import classes from "./LocationDisplay.module.css";
import { Link } from "react-router-dom";
import locationPin from "../../assets/location-pin2.svg";
import locationImage from "../../assets/location1.webp";

export default function LocationDisplay() {
  return (
    <div className={classes.LocationDisplay}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.images}>
            <img src={locationPin} alt="Location Pin" className={classes.locationPin} />
            <img src={locationImage} alt="Location" className={classes.locationImage} />
          </div>
          <div className={classes.address}>
            <h3>Washington DC</h3>
            <h5>Address</h5>
            <p>1201 half street se washington, DC 20003</p>
            <h5>Phone number</h5>
            <p>432-567-0710</p>
            <h5>Hours</h5>
            <p>Mon – Fri: 7:00am-6:00pm</p>
            <p>Sat & Sun: 8:00am-6:00pm</p>
            <Link to="/shop">
              <button className={classes.orderButton}>Order now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}