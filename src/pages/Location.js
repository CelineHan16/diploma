import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/locationHeader-img.jpg";
// import "./style.css";

function Location() {
  return (
    <>
      <Header
        title="Where are we?"
        image={headerImage}>
        A Bakery Paradise is an establishment that produces and sells flour-based food baked in an oven such as bread, cookies, cakes, donuts, pastries, and pies. Some retail bakeries are also categorized as cafés, serving coffee and tea to customers who wish to consume the baked goods on the premises. Confectionery items are also made in most bakeries throughout the world.
      </Header>
    </>
  );
}

export default Location;