import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import './Cart.css';

const CartNavbar = (props) => {
  const [search, setSearch] = useState('');
  const authCtx = useContext(AuthContext);

  const links = authCtx.isLoggedIn ? (
    <div className="logout">
      <a className="lbtn btn" href="#logout">
        Log out
      </a>
    </div>
  ) : (
    <div className="login">
      <a class="lbtn btn modal-trigger" href="/">
        LOGIN
      </a>
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
          <a href="#!" className="heading1">
            <i className="heading1">Grocery</i>
          </a>
          <div class="input-field searchbar">
            <input
              placeholder="Search for products..."
              id="search"
              className="searchin"
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
          <div className="righthome">
            <Link to="/" href="#home">
              Home
            </Link>
          </div>
          {links}
        </div>
      </nav>
    </div>
  );
};

export default CartNavbar;
