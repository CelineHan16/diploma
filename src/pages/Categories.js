import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/shopHeader-img.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <Header
        title="Enjoy your Shopping"
        image={headerImage}>
        Сan't decide? Take a walk through our full menu and be inspired to try...everything!
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;