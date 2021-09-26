import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'materialize-css/dist/css/materialize.min.css';

const baseUrl = 'http://localhost:5000/api/users';

const Login = () => {
  const [credentials, setCredentials] = useState({ user: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [newCredentials, setNewCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: 0,
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    // alert(credentials.user);
    // alert(credentials.password);
    try {
      const ax = await axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        data: {
          email: credentials.user,
          password: credentials.password,
        },
        withCredentials: true,
      });
      console.log(ax);
    } catch (err) {
      console.log(err);
    }
    setCredentials({ user: '', password: '' });
    setIsLogin(false);
  };

  const handleNewLogin = async (e) => {
    e.preventDefault();
    try {
      const ax = await axios({
        method: 'POST',
        url: `${baseUrl}/signup`,
        data: {
          email: newCredentials.email,
          password: newCredentials.password,
          passwordConfirm: newCredentials.confirmPassword,
          phone: newCredentials.mobile,
          name: newCredentials.name,
        },
        withCredentials: true,
      });
      console.log(ax);
    } catch (err) {
      console.log(err);
    }
    setNewCredentials({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: 0,
    });
  };

  return (
    <div className="login">
      {isLogin && (
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
                        setCredentials({
                          ...credentials,
                          user: e.target.value,
                        });
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
                    <a
                      class="login-btn btn"
                      href="#login"
                      onClick={handleLogin}
                    >
                      Login
                    </a>
                    <p className="p-lower2">OR</p>
                    <a class="otp-btn btn" href="#otp">
                      Request OTP
                    </a>
                    <br />
                    <a
                      href="#signup"
                      // data-target="#signup"
                      className="p-lower3 center blue-text alower3 modal-trigger"
                      onClick={() => {
                        setIsLogin((prevState) => !prevState);
                      }}
                    >
                      New to Flipkart? Create an account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                    id="autocomplete-input"
                    class="autocomplete label-input"
                    value={newCredentials.name}
                    onChange={(e) => {
                      setNewCredentials({
                        ...newCredentials,
                        name: e.target.value,
                      });
                    }}
                  />
                  <label for="autocomplete-input">Enter Name</label>
                </div>
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
                    type="password"
                    id="autocomplete-input"
                    class="autocomplete label-input"
                    value={newCredentials.confirmPassword}
                    onChange={(e) => {
                      setNewCredentials({
                        ...newCredentials,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                  <label for="autocomplete-input">Confirm Password</label>
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
                  <a href="/" class="login-btn2 btn" onClick={handleNewLogin}>
                    Continue
                  </a>
                  <br />
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
