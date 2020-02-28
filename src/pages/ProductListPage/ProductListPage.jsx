import React from 'react';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import styled from 'styled-components';

function ProductListPage(props) {
  return (
    <>
      <h1>BLOG</h1>
      <MainContainer className='container'>
        {props.products.map(product =>
          <ProductListItem
            product={product}
            handleDeleteProduct={props.handleDeleteProduct}
            key={product._id}
          />
        )}
      </MainContainer>
    </>
  );
}

export default ProductListPage;


//MAIN CONTAINER
const MainContainer = styled.div`
`;