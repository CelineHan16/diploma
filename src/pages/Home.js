import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header-img3.jpg";
import HomeDisplay from "../components/HomeDisplay/HomeDisplay";

function Home() {
  return (
    <>
      <Header
        title="Making sweet things happen. We create delicious memories."
        image={headerImage}>
        Freshly baked Everyday.
      </Header>
      <HomeDisplay />
    </>
  );
}

export default Home;