import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/navigation";
import App from "../App";
import { Routes, Route } from "react-router-dom";
export default function MainLayout() {
  const location = useLocation();
  const isLandingOrNewsletter =
    location.pathname === "/" || location.pathname === "/newsLetter";

  return (
    <>
      <Navigation />
      <div className="flex bg-gray-800 bg-opacity-[20%]">
        <div className="flex-1 bg-gradient-to-b from-[#1A1A1A] to-black">
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
