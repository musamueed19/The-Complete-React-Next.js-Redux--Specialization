import React from "react";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center border-b mb-4 border-gray-600">
      <div className="mx-2 sm:mx-6 w-full md:max-w-6xl md:mx-auto py-6">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
