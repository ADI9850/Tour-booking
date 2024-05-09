import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import AdventureIdea from "./component/AdventureIdea";
import Jungle from "./component/Jungle";
import Footer from "./component/Footer";
import Holiday from "./component/Holiday";
import Spirutal from "./component/Spirutal";
import Booking from "./component/Booking";
import Camping from "./component/Camping";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdventureIdea />}></Route>
        <Route path="/camping" element={<Camping />}></Route>
        <Route path="/holiday" element={<Holiday />}></Route>
        <Route path="/jungle" element={<Jungle />}></Route>
        <Route path="/spirutal" element={<Spirutal />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
