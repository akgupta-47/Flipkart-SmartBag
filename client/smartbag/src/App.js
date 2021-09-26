import React, { useEffect } from 'react';
import Landing from './components/Landing/landing';
import Cart from './components/Cart/Cart';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Smartbag from './components/Smartbag/Smartbag';
import Products from './components/Products/product';
import Product from './components/Product/product';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          {/* <Route path="/home" component={Landing} />  */}
          <Route path="/cart" component={Cart} />
          <Route path="/bag" component={Smartbag} />
          <Route path="/products" component={Products} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
