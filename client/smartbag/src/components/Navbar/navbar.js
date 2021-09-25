import React, { useEffect } from 'react';
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

function Navbar() {
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

      <nav className="nav-extended ">
        <div className="nav-wrapper">
          <a href="#!" className="heading ">
            <i>Grocery</i>
          </a>
          <ul className=" hide-on-med-and-down">
            <li>
              {/* <form>
                <div className="input-field white black-text">
                  <input
                    id="search"
                    className="black"
                    placeholder="Search here.."
                    type="search"
                    required
                  />
                  <label className="label-icon" for="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form> */}
            </li>
            <li>
              <a class="waves-light btn modal-trigger" href="#login">
                LOGIN
              </a>
              <Login />
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="dropdown1">
                A link<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="dropdown1">
                A second link<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="dropdown1">
                A third link<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-content white hide-on-med-and-down">
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
                Staples<i class="material-icons right">arrow_drop_down</i>
              </span>
            </a>
          </div>
          <div className="container center" id="nav_container">
            <a href="#" className="dropdown-trigger" data-target="dropdown1">
              <img src={Img2} className="responsive-img" />
              <br />
              <span className="black-text valign-wrapper nav_cont">
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
