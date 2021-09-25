import React from 'react';
import CartNavbar from './CartNavbar';
import CartDetails from './CartDetails';
import './Cart.css';
import Footer from '../Footer/Footer';

const cart = () => {
  return (
    <div className="cart">
      <CartNavbar islogged={true} />
      <CartDetails islogged={true} isEmpty={true}/>
      <Footer />
    </div>
  );
};
export default cart;
