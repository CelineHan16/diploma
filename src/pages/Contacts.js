import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/contactsHeader-img.jpg";

function Account() {
  return (
    <>
      <Header
        title="Our contacts"
        image={headerImage}>
        Reach out at any time, we'd love to hear from you. <br/>
        Our email: asanbekovafin@gmail.com <br/>
        Our contacts: +996 708 820 706
      </Header>
    </>
  );
}

export default Account;