import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Home from "../Home";
import Shop from "../../shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Pages() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
         </Routes>
         <Footer />
      </Router>
   );
}
