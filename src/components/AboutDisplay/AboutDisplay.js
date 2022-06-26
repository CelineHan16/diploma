import React from "react";
import classes from "./AboutDisplay.module.css"; 
import aboutCollage from "../../assets/about-collage.jpg";
import fork from "../../assets/forkCake.webp";
import buffet from "../../assets/buffet.webp";

function AboutDisplay({ product }) {
  return (
    <section className={classes.aboutSection}>
      <div className={classes.container}>
        <h1>About Bakery Paradise</h1>
        <div className={classes.firstSection}>
          <div>
            <p>Conceived, built and run by lovers and purveyors of food, Bakery Paradise transports the curious on a delectable journey of mystery and desire that will elevate the baked good to a piece of comforting decadence that can be experienced every day. Bakery Paradise is the culmination of years of travel, learning, experiencing, yearning and life. Created and helmed by james beard foundation award nominee umber ahmad, Bakery Paradise creates time-honored experiences that innovate in quiet yet meaningful ways.</p>
            <p>Like the meaning of Bakery Paradise, the bakery is a culmination of years of traveling the world and experiencing people through their food, decades of culinary and restaurant experience, and the staunch belief that what you eat changes who you are.</p>
          </div>
          <img src={aboutCollage} alt="About us" className={classes.aboutCollage} />
        </div>
      </div>
      <div className={classes.darkBg}>
        <div className={classes.container}>
          <div className={classes.secondSection}>
            <h1>We are</h1>
            <img src={fork} alt="Fork" className={classes.fork} />
            <p>Bakery Paradise describes the taste essence of food, its flavor and magic that make it delicious. This one word captures the life of a taste experience, unique to each person but cohesive in its stories. it represents something that one cannot describe but wants to experience over and over again, the ultimate goal of the brand. In a world seeking adventure and authentic experiences, Bakery Paradise is a portal of discovery and the ticket to a journey that awaits.</p>
            <img src={buffet} alt="Buffet" className={classes.buffet} />
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.thirdSection}>
          <div className={classes.mission}>Mission statement</div>
          <p>We combine the the tastes, experiences and passions of our lives</p>
          <p>to help you create memories in yours.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutDisplay;