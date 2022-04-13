import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Shop from "./pages/Shop";
import Account from "./pages/Account";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import SpecialDays from "./pages/SpecialDays";
import Delivery from "./pages/Delivery";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialdays" element={<SpecialDays />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
