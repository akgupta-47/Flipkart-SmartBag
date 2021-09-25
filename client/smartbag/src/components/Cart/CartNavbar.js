import React, { useState } from 'react';
import Login from '../Login/Login';
import './Cart.css';

const CartNavbar = (props) => {
  const [search, setSearch] = useState('');
  const links = props.islogged ? (
    <div className="logout">
      <a className="alog" href="#logout">
        Log out
      </a>
    </div>
  ) : (
    <div className="login">
      <a class="lbtn btn modal-trigger" href="#login">
        LOGIN
      </a>
      <Login />
    </div>
  );
  const handleSearch = (e) => {
    console.log(search);
    setSearch('');
  };
  return (
    <div className="CartNavbar">
      <nav>
        <div class="nav-wrapper">
          <div class="input-field searchbar">
            <input
              placeholder="Search for products, brands and more"
              id="search"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              required
            />
            <i
              class="material-icons search"
              onClick={handleSearch}
              href="#search"
            >
              search
            </i>
          </div>
          {links}
        </div>
      </nav>
    </div>
  );
};

export default CartNavbar;
