import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Home from "../Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../detail/Detail";

export default function Pages() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart/:id" element={<Detail />} />
         </Routes>
         <Footer />
      </Router>
   );
}
