import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>

      <div className="py-4 md:py-6 flex justify-center items-center">

      {/* Navbar */}
      <Navbar />
      </div>
    </header>
  );
};

export default Header;
