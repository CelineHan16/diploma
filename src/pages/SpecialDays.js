import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/specialDayHeader-img.jpg";
import SpecialDaysDisplay from "../components/SpecialDaysDisplay/SpecialDaysDisplay";

function SpecialDays() {
  return (
    <>
      <Header
        title="Special Days"
        image={headerImage}>
        Make many happy and yummi memories — get out there and celebrate! Enjoy your special day.
      </Header>
      <SpecialDaysDisplay />
    </>
  );
}

export default SpecialDays;