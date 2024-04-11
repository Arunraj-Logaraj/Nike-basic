import { useState } from "react";
import "./components/style.css";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayValues from "./components/DisplayValues";
import EditValues from "./components/EditValues";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<DisplayValues />} />
          <Route path="/edit" element={<EditValues />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
