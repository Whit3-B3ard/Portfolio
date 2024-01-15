import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/homeLayout";
import MainLayout from "./layouts/mainLayout";
import App from "./App";
import Contact from "./pages/contact";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
