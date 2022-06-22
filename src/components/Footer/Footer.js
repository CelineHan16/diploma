import classes from "./Footer.module.css";
import React from "react";
import instagram from "../../assets/instagram-logo.svg";
import twitter from "../../assets/twitter-logo.svg";
import linkedin from "../../assets/linkedin-logo.svg";
import facebook from "../../assets/facebook-logo.svg";

function Footer(props) {
  return (
    <footer className={classes.Footer}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3><a href="/">Bakery Paradise</a></h3>
          <p>A thoughtful expression of modern craft through good food and warm experiences.</p>
          <p>Serve 247 for excellence in baking.</p>
        </div>
        <div className={classes.form}>
          <h4>Sign Up For Sweet News!</h4>
          <form>
            <input type="email" placeholder="Email address"/>
            <button type="submit">&#8594;</button>
          </form>
        </div>
        <div className={classes.pages}>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Products</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>
        <div className={classes.socialLinks}>
          <div>Let's chat!</div>
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" className={classes.instagram} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src={twitter} alt="twitter" className={classes.twitter} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="linkedin" className={classes.linkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" className={classes.facebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>      
    </footer>
  );
}

export default Footer;