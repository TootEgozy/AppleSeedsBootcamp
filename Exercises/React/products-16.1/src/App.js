import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import NotFound from './Components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/products' exact component={Products}/>
          <Route path='/products/:id' component={ProductDetail}/>
          <Route path='*' exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
