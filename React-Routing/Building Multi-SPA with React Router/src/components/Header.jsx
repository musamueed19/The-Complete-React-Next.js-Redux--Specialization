import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="">

      <div className="py-4 md:py-6 flex justify-center items-center gap-x-6">

        {/* Logo */}
        <Logo />

      {/* Navbar */}
      <Navbar />
      </div>
    </header>
  );
};

export default Header;
