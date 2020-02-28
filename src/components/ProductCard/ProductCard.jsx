import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function ProductCard({product}) {
  return (
    <MainContainer className='container'>
        <h2 className=''>{product.title}</h2>
            <span className="badge badge-secondary">By {product.author}</span>
            <h4>{product.description}</h4>
            <hr/>
            <div className="row my-5">
              <div className="col-sm-2">
                <Link className='btn btn-success' to='/market' >BACK</Link>
              </div>
            </div>
    </MainContainer>
  );
}

export default ProductCard;


//MAIN CONTAINER
const MainContainer = styled.div`
  margin: /rem0;
  h2{
    font-size: 100%;
  }
  h4{
    font-size: 55%;
  }
  span{
    font-size: 80%;
  }
  .btn{
    font-size: 5rem;
  }
`;