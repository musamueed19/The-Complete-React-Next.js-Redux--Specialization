import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div className="bg-dark min-h-screen h-fit text-white">
      {/* Header */}
      <Header />



      {/* children */}
      <div className="text-center">

      <Outlet />
      </div>
      
    </div>
  );
};

export default DefaultLayout;
