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
    description: "Taste your favorite combination of berries to top this play on a classic cheesecake. Lightly sweetened berries top pastry cream contained in a graham cracker crust.",
    price: 11,
  },
  {
    image: whiteChocolateSalamiImage,
    productId: "white-chocolate-salami",
    title: "White Chocolate Salami",
    description: "Cranberry Pistachio White Chocolate Truffles are super cute and festive no-bake dessert! This is the tastiest Christmas dessert ever!",
    price: 12,
  },
  {
    image: terrysChocolateCheesecakeImage,
    productId: "terrys-chocolate-cheesecake",
    title: "Terry's Chocolate Cheesecake",
    description: "Our chocolate orange cheesecake is absolutely the alternative festive dessert you need in your life. Forget the fact that chocolate and orange is already a perfect food flavour combination - but the addition of actual Terry's chocolate makes this cheesecake 100% tasty af.",
    price: 17,
  },
  {
    image: raspberryRoseMarshmallowsImage,
    productId: "raspberry-rose-marshmallows",
    title: "Raspberry Rose Marshmallows",
    description: "These are hand-cut caramel marshmallows, and given them a spring refresh. We've swirled in the restorative effects of Bulgarian rose and raspberries, making these fluffy marshmallows naturally pretty in pink.",
    price: 10,
  },
  {
    image: whiteChocolateFudgeImage,
    productId: "white-chocolate-cranberry-pistachio-fudge",
    title: "White Chocolate Cranberry Pistachio Fudge",
    description: "Cranberries and pistachios are the perfect combination at Christmas, with their bright red and green colours, they really make our white chocolate fudge stand out!",
    price: "20",
  },
  {
    image: strawberryCupcakesImage,
    productId: "chocolate-strawberry-cupcakes",
    title: "Chocolate Strawberry Cupcakes",
    description: "These cupcakes are chocolatey, the frosting is full of strawberry flavor and naturally colored thanks to a secret ingredient, and they are all topped with a chocolate covered strawberry.",
    price: 15,
  },
];

export function getProducts() {
  return products;
};

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
};