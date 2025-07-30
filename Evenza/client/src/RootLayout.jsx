import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

const RootLayout = () => {
  return (
    <div className="min-h-screen h-fit bg-[#121212] text-white">
      <Header />

      {/* children */}
      <main className="w-full px-2 md:px-0 md:max-w-7xl md:mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
