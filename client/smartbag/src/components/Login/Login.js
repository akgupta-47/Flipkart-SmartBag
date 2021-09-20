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
                        <div className="col left-col s5">
                            <h4>Login</h4>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                            <div className="log_img"></div>
                        </div>
                        <div className="col right-col s7">
                            <div className="row">
                            <div class="input-field col s12">
                                <input type="text" id="autocomplete-input" class="autocomplete label-input"/>
                                 <label for="autocomplete-input">Enter Email/Mobile Number</label>
                            </div>
                            <div class="input-field col s12">
                                <input type="text" id="autocomplete-input2" class="autocomplete label-input"/>
                                 <label for="autocomplete-input2">Enter Password</label>
                                 <p className="p-lower">By continuing, you agree to <span className="blue-text">Flipkart's Terms of Use</span> and <span className="blue-text">Privacy Policy.</span></p>
                                 <a class="login-btn btn">Login</a>
                                 <p className="p-lower2">OR</p>
                                 <a class="otp-btn btn z-depth-4">Request OTP</a>
                                 <p className="p-lower3 center blue-text">New to Flipkart? Create an account</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default Login