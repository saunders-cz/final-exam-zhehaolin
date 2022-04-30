import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage"


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Route>
       

       
      </Routes>
    </BrowserRouter>
  );
};