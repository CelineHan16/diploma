import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header-img1.jpg";
// import "./style.css";

function Home() {
  return (
    <>
      <Header
        title="Making sweet things happen. We create delicious memories."
        image={headerImage}>
        Freshly baked Everyday.
      </Header>
    </>
  );
}

export default Home;