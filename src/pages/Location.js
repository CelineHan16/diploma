import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/copylocationHeader-img.jpg";
import LocationDisplay from "../components/LocationDisplay/LocationDisplay";

function Location() {
  return (
    <>
      <Header
        title="Where are we?"
        image={headerImage}>
        Home Baked, Home Based. Your advantage is our location.
      </Header>
      <LocationDisplay />
    </>
  );
}

export default Location;