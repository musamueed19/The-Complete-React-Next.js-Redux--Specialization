import React from "react";
import { dummyEvents } from "../constants/constants";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="py-4">
      <h1 className="text-4xl font-semibold text-gray-400">Events</h1>
      <ul className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyEvents?.map((item, index) => (
          <li key={index}>
            <Link to={`/event/${item.id}`}>
              <div className="min-h-80 h-fit bg-gray-800/70 hover:scale-105 transition-all duration-600 shadow-gray-700 hover:shadow-sm rounded-xl p-2">
                <h3 className="text-center text-xl font-medium underline underline-offset-4 capitalize">
                  {item.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
