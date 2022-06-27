// import React from "react";

import mixedBerryTartImage from "../assets/mixed-berry-tarts.jpeg";
import whiteChocolateSalamiImage from "../assets/whiteChocolateSalami.jpg";
import terrysChocolateCheesecakeImage from "../assets/terrysChocolateCheesecake.jpg";
import raspberryRoseMarshmallowsImage from "../assets/raspberryRoseMarshmallows.jpg";
import whiteChocolateFudgeImage from "../assets/whiteChocolatecranBerryPistachioFudge.jpg";
import strawberryCupcakesImage from "../assets/chocolateCoveredStrawberryCupcakes.jpg";
import browniesClassicImage from "../assets/egglessWalnutBrownies.webp";
import raspberryCookiesImage from "../assets/raspberryCookies.jpg";
import raspberryPistachioSemifreddoImage from "../assets/raspberryPistachioSemifreddo.jpg";
import signatureCookieImage from "../assets/signatureCookie.jpg";
import classicPannetoneImage from "../assets/classicPannetone.jpg";
import milkBarImage from "../assets/milkBar.jpg";
import curvedCroissantImage from "../assets/curvedCroissant.png";
import donnaHaysCakeImage from "../assets/donnaHaysChocolateMeringueCake.jpg";
import pistachioBlondiesImage from "../assets/whitechocolatepistachioblondies.jpg";
import cinnamonRollsImage from "../assets/cinnamonRolls.jpg";
import jellyDoughnutsImage from "../assets/jellyDoughnuts.jpg";
import pecanPieImage from "../assets/pecanPie.jpg";

const products = [
  {
    image: curvedCroissantImage,
    productId: "curved-croissant",
    categoryId: "bake-at-home",
    title: "Curved Croissant",
    description: "A light, flaky and crisp curved croissant: the perfect way to start the day.",
    price: 3,
  },
  {
    image: mixedBerryTartImage,
    productId: "mixed-berry-tart",
    categoryId: [
      "bake-at-home",
      "holiday-gifting"
    ],
    title: "Mixed Berry Tarts",
    description: "Taste your favorite combination of berries to top this play on a classic cheesecake. Lightly sweetened berries top pastry cream contained in a graham cracker crust.",
    price: 11,
  },
  {
    image: whiteChocolateSalamiImage,
    productId: "white-chocolate-salami",
    categoryId: "best-sellers",
    title: "White Chocolate Salami",
    description: "Cranberry Pistachio White Chocolate Truffles are super cute and festive no-bake dessert! This is the tastiest Christmas dessert ever!",
    price: 12,
  },
  {
    image: terrysChocolateCheesecakeImage,
    productId: "terrys-chocolate-cheesecake",
    categoryId: "birthday",
    title: "Terry's Chocolate Cheesecake",
    description: "Our chocolate orange cheesecake is absolutely the alternative festive dessert you need in your life. Forget the fact that chocolate and orange is already a perfect food flavour combination - but the addition of actual Terry's chocolate makes this cheesecake 100% tasty af.",
    price: 17,
  },
  {
    image: cinnamonRollsImage,
    productId: "cinnnamon-rolls",
    categoryId: "bake-at-home",
    title: "Cinnamon Rolls",
    description: "Elevate mom's breakfast in bed with fresh-from-the-oven cinnamon rolls. A fan-favorite, our bake at home cinnamon rolls are made with tender brioche dough, an abundance of brown sugar and cinnamon, and topped with a tangy cream cheese frosting.",
    price: 10,
  },
  {
    image: raspberryRoseMarshmallowsImage,
    productId: "raspberry-rose-marshmallows",
    categoryId: "bake-at-home",
    title: "Raspberry Rose Marshmallows",
    description: "These are hand-cut caramel marshmallows, and given them a spring refresh. We've swirled in the restorative effects of Bulgarian rose and raspberries, making these fluffy marshmallows naturally pretty in pink.",
    price: 10,
  },
  {
    image: whiteChocolateFudgeImage,
    categoryId: "birthday",
    productId: "white-chocolate-cranberry-pistachio-fudge",
    title: "White Chocolate Cranberry Pistachio Fudge",
    description: "Cranberries and pistachios are the perfect combination at Christmas, with their bright red and green colours, they really make our white chocolate fudge stand out!",
    price: "20",
  },
  {
    image: strawberryCupcakesImage,
    productId: "chocolate-strawberry-cupcakes",
    categoryId: "birthday",
    title: "Chocolate Strawberry Cupcakes",
    description: "These cupcakes are chocolatey, the frosting is full of strawberry flavor and naturally colored thanks to a secret ingredient, and they are all topped with a chocolate covered strawberry.",
    price: 15,
  },
  {
    image: jellyDoughnutsImage,
    productId: "jelly-doughnuts",
    categoryId: "bake-at-home",
    title: "Jelly Doughnuts",
    description: "As we change from coats to summer dresses, we are also transitioning our doughnuts from old-fashioned to jelly-filled. Welcome the newest member of our pastry offering: a jelly doughnut worthy of praise, high-fives, and big bites. We're starting with raspberry and already dreaming up our next flavor.",
    price: 15,
  },
  {
    image: raspberryCookiesImage,
    productId: "raspberry-cookies",
    categoryId: "bake-at-home",
    title: "Raspberry Cookies",
    description: "Raspberry Cookies that taste just like Subway Cookies. These chewy cookies are full of white chocolate chips and buttery flavor.",
    price: 8,
  },
  {
    image: browniesClassicImage,
    productId: "brownies-classic",
    categoryId: "best-sellers",
    title: "Brownies Classic",
    description: "Brownies are an American chocolate dessert made very much like cake, although with slightly different ingredients. They appear to have originated in the late 1880s, either through a happy baking mistake or through calculated work. Unlike cakes, they are not leavened with baking powder, so they are denser and heavier.",
    price: 18,
  },
  {
    image: raspberryPistachioSemifreddoImage,
    productId: "raspberry-pistachio-semifreddo",
    categoryId: "best-sellers",
    title: "Raspberry Pistachio Semifreddo",
    description: "Think of this raspberry pistachio semifreddo as a spectacularly elegant no-churn ice cream. It's gorgeous, easy-to-make, and memorable—and best of all, it can be made year-round using frozen berries!",
    price: 21,
  },
  {
    image: signatureCookieImage,
    productId: "signature-cookie",
    categoryId: "holiday-gifting",
    title: "Signature Cookie",
    description: "For the cookie lover in your life, gift the gift of the ultra-decadent Levain cookies. All of New York City-based Levain Bakery's cookies are baked daily in small batches and hand packaged. Rich, thick and indulgent, these cookie have reach cult-classic status in the city. Levain Bakery's classic Cookie Assortment includes the original four cookie flavors: Chocolate Chip Walnut, Dark Chocolate Chocolate Chip, Dark Chocolate Peanut Butter Chip and Oatmeal Raisin. Each gift box contains either four, eight or 12 six-ounce cookies that are baked to order, wrapped in dainty cellophane bags with hand- tied blue ribbons.",
    price: 14,
  },
  {
    image: donnaHaysCakeImage,
    productId: "donna-hays-chocolate-cake",
    categoryId: "birthday",
    title: "Donna Hay's Chocolate Meringue Cake",
    description: "Celebrate the holidays with the ultimate Christmas treat — panettone! Olivieri 1882 is a 6th generation, family owned pasticceria known for their handmade, artisanal traditional panettone cakes. Made with fine ingredients like hand-minced candied oranges.",
    price: 20,
  },
  {
    image: classicPannetoneImage,
    productId: "classic-pannetone",
    categoryId: "holiday-gifting",
    title: "Classic Pannetone",
    description: "Celebrate the holidays with the ultimate Christmas treat — panettone! Olivieri 1882 is a 6th generation, family owned pasticceria known for their handmade, artisanal traditional panettone cakes. Made with fine ingredients like hand-minced candied oranges, Tahiti Bourbon vanilla and natural sourdough, this dough passes through a 48-hour double fermentation and is free of preservatives. From the panettone classico to novel flavor combinations like Peach Amaretto Chocolate, Sour Cherry, and Apple Cinnamon Raisin, these are the perfect soft, cloud-like breads to gift this season.",
    price: 15,
  },
  {
    image: pistachioBlondiesImage,
    productId: "white-chocolate-pistachio-blondies",
    categoryId: "holiday-gifting",
    title: "White Chocolate Pistachio Blondies",
    description: "Christina Tosi's sweets empire, Milk Bar, has the most indulgent, delicious and nostalgic baked goodies. You cannot go wrong with gifting this set of Milk Bar Pie, which is their signature pie that has.",
    price: 19,
  },
  {
    image: pecanPieImage,
    productId: "pecan-pie",
    categoryId: "best-sellers",
    title: "Pecan Pie",
    description: "Pecan pie. Flaky crust. A mountain of pecans. Sweetened with maple syrup and a whole lotta love. Available in the bakeries by the slice and whole. Order for thanksgiving and take a piece to snack on now.",
    price: 23,
  },
  {
    image: milkBarImage,
    productId: "milk-bar",
    categoryId: "holiday-gifting",
    title: "Milk Bar",
    description: "Christina Tosi's sweets empire, Milk Bar, has the most indulgent, delicious and nostalgic baked goodies. You cannot go wrong with gifting this set of Milk Bar Pie, which is their signature pie that has the most addictive sticky, buttery, salty-sweet filling in a hearty oat-cookie crust, and their seasonal peppermint pretzel snap tin, which is one of their bestselling treats. Inside these cookies are pretzels, peppermint, caramel, and chocolate, on top of a crisp dark chocolate wafer, which is then dipped in silky white chocolate peppermint bark.",
    price: 22,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
};

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
};