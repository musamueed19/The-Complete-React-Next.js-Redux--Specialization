import React from "react";
import { Link } from "react-router-dom";

import { productItems } from "../constants/constant";

const Products = () => {
  return (
    <div className="flex flex-col gap-6 text-xl font-medium">
      {productItems.map((item, index) => (
        <Link key={index} to={item.to} className="hover:text-red-400" >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Products;
