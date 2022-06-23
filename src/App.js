import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import Account from "./pages/Contacts";
import About from "./pages/About/About";
import SpecialDays from "./pages/SpecialDays";
import Location from "./pages/Location";
import Unveil from "./pages/Unveil";
import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'cart/restore' });
  }, []);


  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialdays" element={<SpecialDays />} />
          <Route path="/location" element={<Location />} />
          <Route path="/unveil" element={<Unveil />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
