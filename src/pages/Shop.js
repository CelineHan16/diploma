import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
// import { Outlet } from "react-router-dom";



function Shop() {
  

  return (
    <>
      <Header
        title="Enjoy your Shopping"
        image={headerImage}>
        A Bakery Paradise is an establishment that produces and sells flour-based food baked in an oven such as bread, cookies, cakes, donuts, pastries, and pies. Some retail bakeries are also categorized as cafés, serving coffee and tea to customers who wish to consume the baked goods on the premises. Confectionery items are also made in most bakeries throughout the world.
      </Header>

      <ProductList products={getProducts()} />

    </>
  );
}

export default Shop;