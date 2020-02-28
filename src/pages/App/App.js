import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import * as productAPI from '../../utils/products-api';
import ProductListPage from '../../pages/ProductListPage/ProductListPage';
import AddProductPage from '../../pages/AddProductPage/AddProductPage';
import ProductDetailPage from '../../pages/ProductDetailPage/ProductDetailPage';
import EditProductPage from '../../pages/EditProductPage/EditProductPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      user: userService.getUser()
    };
  }


  //----------------------AUTH HANDLES-------------------------//
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  //-------------------PRODUCT HANDLES-------------------------//
  //ADD BTN
  handleAddProduct = async newProdData => {
    newProdData.userRef = this.state.user
    const newProd = await productAPI.create(newProdData);
    this.setState(state => ({
      products: [...state.products, newProd]
    }),
    () => this.props.history.push('/market'));
  }
  //UPDATE BTN
  handleUpdateProduct = async updatedProdData => {
    const updatedProduct = await productAPI.update(updatedProdData);
    const newProductsArray = this.state.products.map(p =>
      p._id === updatedProduct._id ? updatedProduct : p
    );
    this.setState(
      {products: newProductsArray},
      () => this.props.history.push('/market')
    );
  }
  //DELETE BTN
  handleDeleteProduct= async id => {
    await productAPI.deleteOne(id);
    this.setState(state => ({
      products: state.products.filter(p => p._id !== id)
    }), () => this.props.history.push('/market'));
  }
  //------------------Lifecycle Methods-------------------------//
  async componentDidMount() {
    const products = await productAPI.getAll();
    this.setState({products});
  }
  //------------------------------------------------------------//





  render() {
    return (
      <div className="wholepage">
        <NavBar className="toppage" user={this.state.user} handleLogout={this.handleLogout} />
        <div className="leftpage">
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            }/>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/add' render={() =>
              <AddProductPage
                handleAddProduct={this.handleAddProduct}
                user={this.state.user}
              />
            } />
            <Route exact path='/details' render={({location}) =>
              <ProductDetailPage location={location}/>
            } />
            <Route exact path='/edit' render={({location}) =>
              <EditProductPage
                handleUpdateProduct={this.handleUpdateProduct}
                location={location}
              />
            } />
            <Route exact path='/market' render={() =>
              <ProductListPage
                user={this.state.user}
                products={this.state.products}
                handleDeleteProduct={this.handleDeleteProduct}
              />
            } />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;