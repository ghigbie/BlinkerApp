import React, {Component} from 'react';
import './Display.css';

import SearchBar from './../SearchBar/SearchBar';
import CarTile from './../CarTile/CarTile';

class Display extends Component{
    render(){
        const cars = this.props.carList.map((car) => 
                    (<CarTile key={car.index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              mileage={car.mileage}
                              image={car.image_url}/>));
        
        return(
            <div className="container flex">
                <SearchBar />
                {cars}
            </div>
        );
    }
}

export default Display;