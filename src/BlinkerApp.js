import React, { Component } from 'react';
import axios from 'axios';
import './BlinkerApp.css';

import Header from './components/Header/Header';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';

class BlinkerApp extends Component {
  title = 'Car Finder';
  subtitle ='Find the right car for you!';

  render(){
    return(
      <div>
        <Header title={this.title}
                subtitle={this.subtitle} />
        <Display />
        <Footer />
      </div>
    );
    
  }
}

export default BlinkerApp;
