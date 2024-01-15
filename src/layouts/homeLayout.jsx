import React from "react";
import Navigation from "../components/navigation";
import { Outlet } from "react-router-dom";
import Hero from "../components/hero";
import Highlights from "../components/highlights";
export default function HomeLayout() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Highlights />
      <Outlet />
    </div>
  );
}
