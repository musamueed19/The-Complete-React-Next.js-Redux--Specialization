import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div className="bg-dark min-h-screen h-fit text-primary">
      {/* Header */}
      <Header />



      {/* children */}
      <main className="h-full text-center">

      <Outlet />
      </main>
      
    </div>
  );
};

export default DefaultLayout;
