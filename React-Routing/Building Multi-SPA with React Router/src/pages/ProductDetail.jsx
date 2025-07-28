import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const { productId } = params;

    return <div>

        <h1>Product Detail</h1>
        { productId}
  </div>;
};

export default ProductDetail;
