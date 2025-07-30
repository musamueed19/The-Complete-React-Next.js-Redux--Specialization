import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import NotFound from "./pages/NotFound";
import RootLayout from "./RootLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Wrapper Layout */}
          <Route element={<RootLayout />}>
            {/* Relative Routing */}
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="events" element={<Events />} />
              <Route path="event/:eventId" element={<EventDetail />} />
              <Route path="event/new" element={<NewEvent />} />
              <Route path="event/:eventId/edit" element={<EditEvent />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
