import React, { useState } from 'react';
import './Login.css';
import 'materialize-css/dist/css/materialize.min.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ user: '', password: '' });
  const [newCredentials, setNewCredentials] = useState({
    email: '',
    password: '',
    mobile: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials.user);
    console.log(credentials.password);
    setCredentials({ user: '', password: '' });
  };

  const handleOTP = (e) => {
    e.preventDefault();
    console.log(credentials.user);
    console.log(credentials.password);
    setCredentials({ user: '', password: '' });
  };

  const handleNewLogin = (e) => {
    e.preventDefault();
    console.log(newCredentials.email);
    console.log(newCredentials.password);
    console.log(newCredentials.mobile);
    setNewCredentials({ email: '', password: '', mobile: '' });
  };

  return (
    <div className="login">
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
                    value={credentials.user}
                    onChange={(e) => {
                      setCredentials({ ...credentials, user: e.target.value });
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
                    value={credentials.password}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      });
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
                  <br />
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
              <h4 className="h4sign">Looks like you're new here!</h4>
              <p>Sign up with your mobile number to get started</p>
              <div className="signup_img"></div>
            </div>
            <div className="col center right-col2 s7">
              <div className="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    id="autocomplete-input4"
                    class="autocomplete label-input"
                    value={newCredentials.email}
                    onChange={(e) => {
                      setNewCredentials({
                        ...newCredentials,
                        email: e.target.value,
                      });
                    }}
                  />
                  <label for="autocomplete-input4">Enter your email</label>
                </div>
                <div class="input-field col s12">
                  <input
                    type="password"
                    id="autocomplete-input5"
                    class="autocomplete label-input"
                    value={newCredentials.password}
                    onChange={(e) => {
                      setNewCredentials({
                        ...newCredentials,
                        password: e.target.value,
                      });
                    }}
                  />
                  <label for="autocomplete-input5">Enter your password</label>
                </div>
                <div class="input-field col s12">
                  <input
                    type="number"
                    id="autocomplete-input3"
                    class="autocomplete label-input"
                    value={newCredentials.mobile}
                    onChange={(e) => {
                      setNewCredentials({
                        ...newCredentials,
                        mobile: e.target.value,
                      });
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
