import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header-img3.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header
        title="Making sweet things happen. We create delicious memories."
        image={headerImage}>
        Freshly baked Everyday.
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;