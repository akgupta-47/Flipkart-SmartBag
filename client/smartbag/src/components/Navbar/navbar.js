import React,{useEffect} from 'react';
import './navbar.css';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar(){
   
    return(
        <div classNameName="navbar">
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
            </ul>

            <nav className="nav-extended">
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i>Grocery</i></a>

                <ul className="right hide-on-med-and-down">
                    <li>
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required/>
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </li>
                    <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A link<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A second link<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A third link<i class="material-icons right">arrow_drop_down</i></a></li>
                </ul>
                </div>
                <div className="nav-content">
                <span className="nav-title">Title</span>
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">add</i>
                </a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;