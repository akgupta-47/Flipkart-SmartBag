import React from 'react';
import './Cart.css';
import LoggedOutCart from './LoggedOutCart';
import LoggedinCart from './LoggedinCart';

const CartDetails = (props) => {
  const links = props.islogged ? (
    <LoggedinCart isEmpty={props.isEmpty} />
  ) : (
    <LoggedOutCart />
  );
  return <div className="cartdetails">{links}</div>;
};
export default CartDetails;
