import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { eventsNavLinks } from "../constants/constants";

const EventNavigation = () => {
  return (
    <div>
      <div>
        <ul className="flex w-full justify-center items-center py-4 gap-x-6">
          {eventsNavLinks?.map((item, index) => (
            <li>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "eventNavLinks bg-yellow-500" : "eventNavLinks"
                }
                end
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default EventNavigation;
