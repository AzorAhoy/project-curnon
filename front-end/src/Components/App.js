import React from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import Head from './Header';
import Footer from'./Footer'
import Home from '../Containers/Home';
import ProductDetail from '../Containers/ProductDetail';

function App() {
  return (
      <div className="App container">
      <Switch>
        <Route
          exact
          path="/product/:id"
           render={props => {
              return <ProductDetail
                {...props}
                // username={this.state.username}
                // onLogin={this._onLogin}
                />
          }}
          />

          <Route
          exact
          path="/"
           render={props => {
              return <Home
                {...props}
                // username={this.state.username}
                // onLogin={this._onLogin}
                />
          }}
          />
        
      </Switch>
      </div>
  );
}

export default App;
