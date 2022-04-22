import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import ProductList from "../components/ProductList/ProductList";

import mixedBerryTartImage from "../assets/mixedBerryTart.jpg";
import whiteChocolateSalamiImage from "../assets/whiteChocolateSalami.jpg";
import terrysChocolateCheesecakeImage from "../assets/terrysChocolateCheesecake.jpg";
import raspberryRoseMarshmallowsImage from "../assets/raspberryRoseMarshmallows.jpg";
import whiteChocolateFudgeImage from "../assets/whiteChocolatecranBerryPistachioFudge.jpg";
import strawberryCupcakesImage from "../assets/chocolateCoveredStrawberryCupcakes.jpg";

function Shop() {
  const products = {
    mixedBerryTart: {
      image: mixedBerryTartImage,
      path: "/",
      title: "Mixed Berry Tart",
      price: 11,
    },
    whiteChocolateSalami: {
      image: whiteChocolateSalamiImage,
      path: "/",
      title: "White Chocolate Salami",
      price: 12,
    },
    terrysChocolateCheesecake: {
      image: terrysChocolateCheesecakeImage,
      path: "/",
      title: "Terry's Chocolate Cheesecake",
      price: 17,
    },
    raspberryRoseMarshmallows: {
      image: raspberryRoseMarshmallowsImage,
      path: "/",
      title: "Raspberry Rose Marshmallows",
      price: 10,
    },
    whiteChocolateFudge: {
      image: whiteChocolateFudgeImage,
      path: "/",
      title: "White Chocolate Cranberry Pistachio Fudge",
      price: "20",
    },
    strawberryCupcakes: {
      image: strawberryCupcakesImage,
      path: "/",
      title: "Chocolate Strawberry Cupcakes",
      price: 15,
    },
  };

  return (
    <>
      <Header
        title="Enjoy your Shopping"
        image={headerImage}>
        A Bakery Paradise is an establishment that produces and sells flour-based food baked in an oven such as bread, cookies, cakes, donuts, pastries, and pies. Some retail bakeries are also categorized as cafés, serving coffee and tea to customers who wish to consume the baked goods on the premises. Confectionery items are also made in most bakeries throughout the world.
      </Header>

      <ProductList products={products} />
    </>
  );
}

export default Shop;