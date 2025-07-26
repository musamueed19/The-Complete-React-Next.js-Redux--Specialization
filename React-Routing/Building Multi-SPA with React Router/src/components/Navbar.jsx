import React from "react";
import { Link, NavLink } from "react-router-dom";

import { navItems } from "../constants/constant";

const Navbar = () => {
  return (
    <nav>
      <div className="flex gap-x-3 md:gap-x-6">
        {navItems?.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "border-amber-600 border-b-4 font-semibold navLink"
                : "navLink hover:text-amber-500 hover:underline underline-offset-9"
            }
            end
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
