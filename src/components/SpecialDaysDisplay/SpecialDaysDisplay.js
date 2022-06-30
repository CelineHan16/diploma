import React from "react";
import classes from "./SpecialDaysDisplay.module.css";
import unveilCollage from "../../assets/unveil.webp";

export default function SpecialDaysDisplay() {
  return (
    <div className={classes.SpecialDaysDisplay}>
      <div>
        <section>
          <p>The celebration of your union has given way to the commemoration of the moment. The moment of i do, i can, i want, i have. We remember the beginnings and the conclusions. The initial taste and the last crumb. of life. of dessert. of everything.</p>
          <p>Your wedding cake is the culmination of your celebration, your partner, your ideals, your mood. each of our creations is a reflection of all that has brought you to this moment. Join us on this celebration of mystery.</p>
        </section>
        <div className={classes.unveil}>
          <img src={unveilCollage} alt="Unveil Collage" />
          <section className={classes.unveilSection}>
            <h1>About the process</h1>
            <p>Bakery Paradise is the culmination of years of travel, learning, experiencing, yearning and life. Created and helmed by james beard foundation award nominee umber ahmad, Bakery Paradise creates time-honored experiences that innovate in quiet yet meaningful ways. In urdu, the word Bakery Paradise describes the taste essence of food,</p>
            <p>its flavor and magic that make it delicious. It represents something that one cannot describe but wants to experience over and over again, the ultimate goal of the brand. In a world seeking adventure and authentic experiences, Bakery Paradise is a portal of discovery and the ticket to a journey that awaits.</p>
          </section>
        </div>
      </div>
    </div>
  )
}