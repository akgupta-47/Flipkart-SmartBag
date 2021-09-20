import React,{useEffect} from 'react';
import './navbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from '../Login/Login'

function Navbar(){
   
    return(
        <div classNameName="navbar center">
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
            </ul>

            <nav className="nav-extended ">
                <div className="nav-wrapper">
                    <a href="#!" className="heading "><i>Grocery</i></a>
                    <ul className=" hide-on-med-and-down" >
                        
                        <li>
                            <form>
                                <div className="input-field white black-text">
                                    <input id="search" className="black" placeholder="Search here.." type="search" required/>
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>
                        <li><Login/></li>
                        <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A link<i class="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A second link<i class="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#" data-target="dropdown1">A third link<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
                <div className="nav-content white">
                    {/* <img src="" */}

                
                </div>
            </nav>
        </div>
    );
}
export default Navbar;