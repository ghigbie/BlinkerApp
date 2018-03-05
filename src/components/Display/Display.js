import React, {Component} from 'react';
import axios from 'axios';
import './Display.css';

import SearchBar from './../SearchBar/SearchBar';
import CarTile from './../CarTile/CarTile';
import ErrorMessage from './../ErrorMessage/ErrorMessage';

class Display extends Component{
    state = {
            carList: [],
            errorMessage: ''
    }

    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
        .then(response => {
            this.setState({carList: response.data});
        })
        .catch(error => {
            const errorMessage = 'We\'re sorry. Something went wrong : (';
            this.setState({errorMessage: errorMessage});
        });
    }

    sortingMethod(){
        console.log('sorting method called');
        let data = this.state.carList.shift();
        this.setState({carList: data});
    }

    render(props){
        let filteredCars = this.state.carList;
        const cars = filteredCars.map((car, index) => 
                    (<CarTile key={index}
                              uniqueID={index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              price={car.price}
                              mileage={car.mileage}
                              image={car.image_url}/>));
                             
        
        const error = (<ErrorMessage errorMessage={this.state.errorMessage} />);
        
        return(
            <div className="container flex">
                <SearchBar />
                <div className="container flex flex-centered">
                    <button className="btn btn-outline-primary sorting">Sort By Year</button>
                    <button className="btn btn-outline-primary sorting">Sort By Mileage</button>
                    <button className="btn btn-outline-primary sorting">Sort By Listing Date</button>
                </div>
                {this.state.errorMessage? error : cars}
            </div>
        );
    }
}

export default Display;