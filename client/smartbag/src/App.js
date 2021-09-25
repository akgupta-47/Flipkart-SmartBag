import React, { useEffect } from 'react';
import Landing from './components/Landing/landing';
import Cart from './components/Cart/Cart';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Landing} /> 
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
