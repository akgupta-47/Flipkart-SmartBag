import React from 'react';
import './Cart.css';
import LoggedOutCart from './LoggedOutCart';
import LoggedinCart from './LoggedinCart';
const CartDetails = (props) => {
  const links = props.islogged ? <LoggedinCart isEmpty={props.isEmpty}/> : <LoggedOutCart />;
  return (
    <div className="cartdetails">
      <div className="card pagecard">
        <span class="card-title main-title">My Cart</span>
        <br />
        {links}
      </div>
    </div>
  );
};
export default CartDetails;
