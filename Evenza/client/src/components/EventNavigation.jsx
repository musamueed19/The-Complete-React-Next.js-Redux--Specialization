import React from "react";
import { Outlet } from "react-router-dom";

const EventNavigation = () => {
  return (
    <div>
      EventNavigation
      <Outlet />
    </div>
  );
};

export default EventNavigation;
