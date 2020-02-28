import React from 'react';
import {Link} from 'react-router-dom';
import './ProductListItem.css';
import styled from 'styled-components';


function ProductListItem({product, handleDeleteProduct}) {
  return (



    <MainContainer className=''>
        <Link className='link' to={{ pathname: '/details', state: {product} }} >
          <h3 className='page-header'>{product.title}</h3>
        </Link>

        <Link className='btn btn-success' to={{ pathname: '/edit', state: {product} }} > EDIT </Link>

        <button className='btn btn-danger' onClick={() => handleDeleteProduct(product._id)} > DELETE </button>

        <hr/>
    </MainContainer>


  );
}

export default ProductListItem;

//MAIN CONTAINER
const MainContainer = styled.div`
  h3{
    font-size: 100%;
  }
  span{
    font-size: 80%;
  }
  .btn{
    font-size: 3rem;
  }
  .link{
    text-decoration: none;
  }
`;