import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './Login.css'
const Login =()=>{
    return(
        <div className="login">
            <a class="waves-light btn modal-trigger" href="#login">LOGIN</a>
            <div id="login" class="modal">
                <div class="modal-content">
                    <div className="row">
                        <div className="col left-col s6 m6">
                            <h4>Login</h4>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                        <div className="col s6 m6">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default Login