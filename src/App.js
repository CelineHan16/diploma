import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Shop from "./pages/Shop";
import Account from "./pages/Account";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
