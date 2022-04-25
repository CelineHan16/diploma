// import React from "react";

import mixedBerryTartImage from "../assets/mixedBerryTart.jpg";
import whiteChocolateSalamiImage from "../assets/whiteChocolateSalami.jpg";
import terrysChocolateCheesecakeImage from "../assets/terrysChocolateCheesecake.jpg";
import raspberryRoseMarshmallowsImage from "../assets/raspberryRoseMarshmallows.jpg";
import whiteChocolateFudgeImage from "../assets/whiteChocolatecranBerryPistachioFudge.jpg";
import strawberryCupcakesImage from "../assets/chocolateCoveredStrawberryCupcakes.jpg";

const products = [
  {
    image: mixedBerryTartImage,
    productId: "mixed-berry-tart",
    title: "Mixed Berry Tart",
    price: 11,
  },
  {
    image: whiteChocolateSalamiImage,
    productId: "white-chocolate-salami",
    title: "White Chocolate Salami",
    price: 12,
  },
  {
    image: terrysChocolateCheesecakeImage,
    productId: "terrys-chocolate-cheesecake",
    title: "Terry's Chocolate Cheesecake",
    price: 17,
  },
  {
    image: raspberryRoseMarshmallowsImage,
    productId: "raspberry-rose-marshmallows",
    title: "Raspberry Rose Marshmallows",
    price: 10,
  },
  {
    image: whiteChocolateFudgeImage,
    productId: "white-chocolate-cranberry-pistachio-fudge",
    title: "White Chocolate Cranberry Pistachio Fudge",
    price: "20",
  },
  {
    image: strawberryCupcakesImage,
    productId: "chocolate-strawberry-cupcakes",
    title: "Chocolate Strawberry Cupcakes",
    price: 15,
  },
];

export function getProducts() {
  return products;
};

export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
};