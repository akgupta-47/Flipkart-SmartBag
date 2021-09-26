import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from '../Login/Login';
import Img from '../../Images/navbar/1.jpg';
import Img2 from '../../Images/navbar/2.jpg';
import Img3 from '../../Images/navbar/3.jpg';
import Img4 from '../../Images/navbar/4.jpg';
import Img5 from '../../Images/navbar/5.jpg';
import Img6 from '../../Images/navbar/6.jpg';
import Img7 from '../../Images/navbar/7.png';
import AuthContext from '../../store/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:5000/api/users';

function Navbar() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    console.log(search);
    setSearch('');
  };
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = async () => {
    try {
      await axios({
        method: 'GET',
        url: `${baseUrl}/logout`,
        data: {},
        withCredentials: true,
      });
      authCtx.logout();
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while loggin user out!',
        footer: 'Try loggin in again!!',
      });
    }
  };

  return (
    <div classNameName="navbar center">
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider" tabindex="-1"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>

      <nav className="nav-extended  ">
        <div className="nav-wrapper valign-wrapper">
          <a href="#!" className="heading ">
            <i>Grocery</i>
          </a>
          <ul className=" hide-on-med-and-down">
            <li>
              <div class="input-field">
                <input
                  placeholder="Search for Products..."
                  id="search"
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  required
                />
                <i className="material-icons right icon_srch valign-wrapper">
                  search
                </i>
              </div>
            </li>
          </ul>
          <ul className="rightnav right hide-on-med-and-down">
            {!isLoggedIn && (
              <li>
                <a class="lbtn btn modal-trigger" href="#login">
                  LOGIN
                </a>
                <Login />
              </li>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/bag" href="#">
                    Smartbag<i class="material-icons right">star</i>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" href="#">
                    My Cart <i class="material-icons right">shopping_cart</i>
                  </Link>
                </li>
                <li>
                  <a
                    class="lbtn btn modal-trigger"
                    href="#login"
                    onClick={logoutHandler}
                  >
                    LOGOUT
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="nav-content white hide-on-med-and-down center">
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont center">
                Staples<i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img2} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont center">
                Snacks & Beverages
                <i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img3} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Packaged Food<i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img4} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Personal & Baby Care
                <i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img5} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Household Care
                <i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img6} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Dairy& Eggs<i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img7} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Home & Kitchen
                <i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
