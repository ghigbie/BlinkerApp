import React, {Component} from 'react';
import './Display.css';

import CarTile from './../CarTile/CarTile';

class Display extends Component{

    render(){
        return(
            <div className="container flex">
                {this.props.carList.map((car) => 
                    (<CarTile key={car.image_url}
                              make={car.make}
                              model={car.model}
                              millege={car.millege}
                              image={this.props.image_url}/>))}
            </div>
        );
    }
}

export default Display;