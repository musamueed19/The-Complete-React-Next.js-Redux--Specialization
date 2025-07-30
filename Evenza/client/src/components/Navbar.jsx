import React from "react";
import { navLinks } from "../constants/constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="flex gap-x-4">
          {navLinks?.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "navLinks text-yellow-300 underline underline-offset-4" : "navLinks"
              }
              end
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
