import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import SearchBar from '/components/SearchBar'
import Display from './components/Display';
import Footer from './components/Footer';

class BlinkerApp extends Component {
  title = "Car Finder";
  subtitle ="Find the right car for you!"
  
  render(){
    return(
      <div>
        <Header title={this.title}
                subtitle={this.subtitle} />
      </div>
    );
  }
}

export default BlinkerApp;
