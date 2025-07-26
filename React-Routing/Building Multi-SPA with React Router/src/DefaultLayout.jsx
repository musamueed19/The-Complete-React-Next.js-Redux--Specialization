import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* Header */}
      <Header />



      {/* children */}
      <Outlet />
      
    </div>
  );
};

export default DefaultLayout;
