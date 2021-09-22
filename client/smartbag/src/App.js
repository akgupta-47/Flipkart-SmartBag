import React, { useEffect } from 'react';
import Landing from './components/Landing/landing';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
