import React from 'react';
import { Link } from 'react-router-dom';
import cartimg from '../../Images/login/cart_img.png';

const EmptyCart = () => {
  return (
    <div className="card pagecard">
      <span class="card-title main-title">My Cart</span>
      <br />
      <div className="empty">
        <div className="cart_img">
          <img className="cart_img" src={cartimg}></img>
        </div>
        <p className="pcart1">Your Cart is Empty!</p>
        <p className="pcart2">Add items to it now.</p>
        <div className="shop">
          <Link to="/cart" class="shop-btn btn" href="#products">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
