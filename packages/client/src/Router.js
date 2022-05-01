import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage"
import { RegisterPage } from "./pages/RegisterPage";
import { OrderPage } from "./pages/OrderPage";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/manage" element={<AdminPage />} />
          <Route path="meals/:id" element={<AdminPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
       

       
      </Routes>
    </BrowserRouter>
  );
};