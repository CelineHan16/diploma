import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import ShopDisplay from "../components/ShopDisplay/ShopDisplay";

function Shop() {
  return (
    <>
      <Header
        title="Enjoy your Shopping"
        image={headerImage}>
        Сan't decide? Take a walk through our full menu and be inspired to try...everything!
      </Header>

      <ShopDisplay />

    </>
  );
}

export default Shop;