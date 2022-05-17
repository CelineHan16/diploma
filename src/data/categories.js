import bestSellersImage from "../assets/bestSellers.jpg";
// import allProductsImage from "../assets/allProducts.jpg";
import holidayGiftingImage from "../assets/holidayGifting.jpg";
import birthdayImage from "../assets/birthday.jpg";
import bakeAtHomeImage from "../assets/bakeAtHome.jpg";

const categories = [
  {
    categoryId: "best-sellers",
    title: "Best sellers",
    image: bestSellersImage,
    desription: "Our best-selling pastries and confections will brighten everyone's day.",
  },
  // {
  //   categoryId: "all-products",
  //   title: "All products",
  //   image: allProductsImage,
  //   desription: "",
  // },
  {
    categoryId: "holiday-gifting",
    title: "Holiday gifting",
    image: holidayGiftingImage,
    desription: "Every turn about the sun deserves a celebration filled with pastries and treats.",
  },
  {
    categoryId: "birthday",
    title: "Birthday",
    image: birthdayImage,
    desription: "Every turn about the sun deserves a celebration filled with pastries and treats.",
  },
  {
    categoryId: "bake-at-home",
    title: "Bake at home",
    image: bakeAtHomeImage,
    desription: "Bring a bit of Bakery Paradise to your own kitchen and make our classic pastries at home.",
  },
];

export function getCategories() {
  return categories;
};

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
};