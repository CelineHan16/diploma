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
        Сan't decide? Take a walk through our full menu and be inspired to try...everything!
      </Header>

      <ProductList products={getProducts()} />

    </>
  );
}

export default Shop;