import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  const { eventId } = params;

  return (
    <div>
      <h1>Event Detail</h1>
      {eventId}
    </div>
  );
};

export default EventDetail;
