import React, {Component} from 'react';
import './Display.css';

import SearchBar from './../SearchBar/SearchBar';
import CarTile from './../CarTile/CarTile';

class Display extends Component{
    tagLines = ['You\'ll love this car!',
                'This is a great car!',
                'It\'s the best car ever!',
                'It\'s an awesome car!',
                'It\'s a great car!'];
    
    tagLine = this.tagLines[Math.floor(Math.random * this.taglines.length)];

    render(){
        const cars = this.props.carList.map((car) => 
                    (<CarTile key={car.index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              mileage={car.mileage}
                              tagLine={this.tagLine}
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