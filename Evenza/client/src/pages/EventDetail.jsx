import React from "react";
import { Link, useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  const { eventId } = params;

  return (
    <div className="relative py-4 space-y-6">
      <div className="mb-6">
        <Link
          to={"/events"}
          relative="path"
          className="rounded-lg text-center px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 hover:text-gray-100 transition-all duration-100"
        >
          Go Back
        </Link>
      </div>

      <h1 className="text-4xl font-semibold">Event Detail</h1>
      {eventId}
    </div>
  );
};

export default EventDetail;
