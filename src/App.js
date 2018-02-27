import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
