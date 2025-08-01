import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./DefaultLayout";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes having Default Layout */}
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route
                path="product/details/:productId"
                element={<ProductDetail />}
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>

          {/* No Default Layout */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
