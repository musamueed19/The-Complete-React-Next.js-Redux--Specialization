import React from "react";
import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="w-[90%] mx-auto text-xl space-y-2">
      <h1>Default Layout</h1>
      <div className="">
        <Link
          to={"/products"}
          className="px-2 py-1 rounded-lg bg-gray-100 font-medium"
        >
          Products
        </Link>
      </div>
      {/* children */}
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
