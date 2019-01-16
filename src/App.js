import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div class="container">
      	<div class="row">
              <div class="col-md-6">
          		<h2>Custom search field</h2>
                  <div id="custom-search-input">
                      <div class="input-group col-md-12">
                          <input type="text" class="form-control input-lg" placeholder="Buscar" />
                          <span class="input-group-btn">
                              <button class="btn btn-info btn-lg" type="button">
                                  <i class="glyphicon glyphicon-search"></i>
                              </button>
                          </span>
                      </div>
                  </div>
              </div>
      	</div>
      </div>
    );
  }
}

export default App;
