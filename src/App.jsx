import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
import store from "./app/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true} />
        <FlexContent endpoint={highlight} ifExists={true} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
}

export default App;
