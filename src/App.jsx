import { useState } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import DisplayValues from "./components/DisplayValues";
import EditValues from "./components/EditValues";
// import "./components/style.css";

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
