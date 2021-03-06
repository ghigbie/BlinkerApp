import React, {Component} from 'react';
import './Display.css';

import SearchBar from './../SearchBar/SearchBar';
import CarTile from './../CarTile/CarTile';
import ErrorMessage from './../ErrorMessage/ErrorMessage';

class Display extends Component{

    render(){
        const cars = this.props.carList.map((car, index) => 
                    (<CarTile key={index}
                              uniqueID={index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              price={car.price}
                              mileage={car.mileage}
                              image={car.image_url}/>));
                             
        
        const error = (<ErrorMessage errorMessage={this.props.errorMessage} />);
        
        return(
            <div className="container flex">
                <SearchBar />
                <div className="container flex flex-centered">
                    <button className="btn btn-outline-primary sorting">Sort By Year</button>
                    <button className="btn btn-outline-primary sorting">Sort By Mileage</button>
                    <button className="btn btn-outline-primary sorting">Sort By Listing Date</button>
                </div>
                {this.props.errorMessage? error : cars}
            </div>
        );
    }
}

export default Display;