import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/copydeliveryHeader-img.jpg";

function Delivery() {
  return (
    <>
      <Header
        title="We have a delivery"
        image={headerImage}>
        Can't come to us? We'll come to you.
      </Header>
    </>
  );
}

export default Delivery;