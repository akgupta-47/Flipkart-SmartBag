import React from 'react';
import cartimg from '../../Images/login/cart_img.png';
import Login from '../Login/Login';

const LoggedOutCart = () => {
  return (
    <div className="card pagecard">
      <span class="card-title main-title">My Cart</span>
      <br />
      <div className="empty">
        <div className="cart_img">
          <img className="cart_img" src={cartimg}></img>
        </div>
        <p className="pcart1">Missing Cart Items?</p>
        <p className="pcart2">Login to see the items you added previously</p>
        <div className="shop">
          <a class="login-btn1 btn modal-trigger" href="#login">
            Login
          </a>
          <Login />
        </div>
      </div>
    </div>
  );
};
export default LoggedOutCart;
