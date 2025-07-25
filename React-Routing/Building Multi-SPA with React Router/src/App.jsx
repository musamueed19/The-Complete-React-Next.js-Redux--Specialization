import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./DefaultLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
