import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/copylocationHeader-img.jpg";

function Location() {
  return (
    <>
      <Header
        title="Where are we?"
        image={headerImage}>
        Home Baked, Home Based. Your advantage is our location.
      </Header>
    </>
  );
}

export default Location;