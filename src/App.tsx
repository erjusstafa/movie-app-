import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { Routes } from "react-router";
import PageDetails from "./components/PageDetails";

function App():ReactElement {
  return (
    <div className="app--container  h-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Container />} />
          <Route path={"item/:id"} element={<PageDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
