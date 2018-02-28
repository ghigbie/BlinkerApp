import React, { Component } from 'react';
import logo from './logo.svg';
import './BlinkerApp.css';

import Header from './components/Header/Header';
import SearchBar from '/components/SearchBar/SearchBar'
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import CarTile from './components/CarTile/CarTile';

class BlinkerApp extends Component {
  title = "Car Finder";
  subtitle ="Find the right car for you!"
  
  render(){
    return(
      <div>
        <Header title={this.title}
                subtitle={this.subtitle} />
        <CarTile />
      </div>
    );
  }
}

export default BlinkerApp;
