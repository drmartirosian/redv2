import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/App/App.css';
import styled from 'styled-components'
import logo from './redv3.jpg'


const NavBar = (props) => {
  let nav = props.user ?
    <MainContainer className="navbar navbar-expand-lg navbar-light bg-light" >
      <Link to='/' className='btn btn-light'>
        <img className="homelink" src={logo} alt="" />
        <div className="homelink"></div>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link exact to='/market' className='link btn btn-info'>MY BLOG</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link exact to='/add' className='link btn btn-success btn-outline'>NEW ARTICLE</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='' className='link btn btn-danger' onClick={props.handleLogout} >LOGOUT</Link>
      {/* <p className=''>Welcome back, {props.user.name}!</p> */}
    </MainContainer>
    :
    <MainContainer>
      <Link to='/' className='link btn btn-info'>HOME</Link>
      <Link to='/login' className='link btn btn-warning'>LOGIN</Link>
      <Link to='/signup' className='link btn btn-danger'>SIGNUP</Link>
      <p>Please sign in...</p>
    </MainContainer>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;

//MAIN CONTAINER
const MainContainer = styled.div`
padding-top: 20px;
  .btn{
    text-decoration: none;
    border-radius: 100px !important;
    font-size: 25px;
  }
  img{
    border-radius: 100px;
    height: 10rem;
  }
`;