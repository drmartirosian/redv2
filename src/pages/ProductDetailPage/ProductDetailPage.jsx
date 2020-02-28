import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductDetailPage(props) {
  const product = props.location.state.product;
  return (
    <>
      <ProductCard
        key={product._id}
        product={product}
      />
    </>
  );
}

export default ProductDetailPage;