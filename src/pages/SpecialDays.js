import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/specialDayHeader-img.jpg";
// import "./style.css";

function SpecialDays() {
  return (
    <>
      <Header
        title="Special Days"
        image={headerImage}>
        Make many happy and yummi memories — get out there and celebrate! Enjoy your special day.
      </Header>
    </>
  );
}

export default SpecialDays;