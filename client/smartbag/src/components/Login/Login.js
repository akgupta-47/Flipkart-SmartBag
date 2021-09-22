import React, { useState } from 'react';
import './Login.css';
import 'materialize-css/dist/css/materialize.min.css';

const Login = () => {
  const [credentials, setCredentials] = useState('');
  const [password, setPassword] = useState('');
  const [newCredentials, setNewCredentials] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
    console.log(password);
    setCredentials('');
    setPassword('');
  };

  const handleOTP = (e) => {
    e.preventDefault();
    console.log(credentials);
    console.log(password);
    setCredentials('');
    setPassword('');
  };

  const handleNewLogin = (e) => {
    e.preventDefault();
    console.log(newCredentials);
    setNewCredentials('');
  };

  return (
    <div className="login">
      <a class="waves-light btn modal-trigger" href="#login">
        LOGIN
      </a>
      <div id="login" class="modal">
        <div class="modal-content">
          <div className="row">
            <div className="col left-col s5">
              <h4>Login</h4>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
              <div className="log_img"></div>
            </div>
            <div className="col center right-col s7">
              <div className="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    id="autocomplete-input"
                    class="autocomplete label-input"
                    value={credentials}
                    onChange={(e) => {
                      setCredentials(e.target.value);
                    }}
                  />
                  <label for="autocomplete-input">
                    Enter Email/Mobile Number
                  </label>
                </div>
                <div class="input-field col s12">
                  <input
                    type="password"
                    id="autocomplete-input2"
                    class="autocomplete label-input"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label for="autocomplete-input2">Enter Password</label>
                  <p className="p-lower">
                    By continuing, you agree to Flipkart's{' '}
                    <a href="#terms" className="blue-text alower">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="#policy" className="blue-text alower">
                      Privacy Policy.
                    </a>
                  </p>
                  <a class="login-btn btn" href="#login" onClick={handleLogin}>
                    Login
                  </a>
                  <p className="p-lower2">OR</p>
                  <a class="otp-btn btn" href="#otp" onClick={handleOTP}>
                    Request OTP
                  </a>
                  <a
                    href="#signup"
                    className="p-lower3 center blue-text alower3 modal-trigger"
                  >
                    New to Flipkart? Create an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="signup" class="modal">
        <div class="modal-content">
          <div className="row">
            <div className="col left-col s5">
              <h4>Looks like you're new here!</h4>
              <p>Sign up with your mobile number to get started</p>
              <div className="signup_img"></div>
            </div>
            <div className="col center right-col2 s7">
              <div className="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    id="autocomplete-input3"
                    class="autocomplete label-input"
                    value={newCredentials}
                    onChange={(e) => {
                      setNewCredentials(e.target.value);
                    }}
                  />
                  <label for="autocomplete-input3">
                    Enter your Mobile Number
                  </label>

                  <p className="ps-lower">
                    By continuing, you agree to Flipkart's{' '}
                    <a href="#terms" className="blue-text alower">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="#policy" className="blue-text alower">
                      Privacy Policy.
                    </a>
                  </p>
                  <a class="login-btn2 btn" onClick={handleNewLogin}>
                    Continue
                  </a>
                  <a class="otp-btn2 btn modal-close" href="#!">
                    Existing User? Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
