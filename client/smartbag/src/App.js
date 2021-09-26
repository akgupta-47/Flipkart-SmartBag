import React, { useEffect, useContext } from 'react';
import Landing from './components/Landing/landing';
import Cart from './components/Cart/Cart';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Smartbag from './components/Smartbag/Smartbag';
import Products from './components/Products/product';
import axios from 'axios';
import AuthContext from './store/AuthContext';

const baseUrl = 'http://localhost:5000/api/users';
function App() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    M.AutoInit();
    const bro = async () => {
      const res = await axios({
        method: 'GET',
        url: `${baseUrl}/get-cookie`,
        withCredentials: true,
      });
      authCtx.login(res.data.data);
    };
    bro();
  }, [authCtx]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          {/* <Route path="/home" component={Landing} />  */}

          <Route path="/bag">
            {authCtx.isLoggedIn && <Smartbag />}
            {authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/cart">
            {authCtx.isLoggedIn && <Cart />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/products" component={Products} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
