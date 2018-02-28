import React, {Component} from 'react';
import './Display.css';

import CarTile from './../CarTile/CarTile';

class Display extends Component{

    render(){
        return(
            <div className="container flex">
                {this.props.carList.map((car) => 
                    (<CarTile key={car.index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              mileage={car.mileage}
                              image={car.image_url}/>))}
            </div>
        );
    }
}

export default Display;