import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './BlinkerApp.css';

import Header from './components/Header/Header';
//import SearchBar from '/components/SearchBar/SearchBar'
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import CarTile from './components/CarTile/CarTile';

class BlinkerApp extends Component {
  state = {
    carList: []
  }
  
  title = "Car Finder";
  subtitle ="Find the right car for you!"
  
  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
    .then(response => {
      this.setState({carList: response.data})
      console.log(response);
    });
  }
  
  render(){
    return(
      <div>
        <Header title={this.title}
                subtitle={this.subtitle} />
        <Display carList={this.state.carList} />
        <Footer />
      </div>
    );
    
  }
}

export default BlinkerApp;
