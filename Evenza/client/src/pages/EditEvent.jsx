import React from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {
  const params = useParams();
  const { eventId } = params;

  return (
    <div>
      <h1>Edit Event</h1>
      {eventId}
    </div>
  );
};

export default EditEvent;
