import React, {Component} from 'react';
import './Display.css';

import CarTile from './../CarTile/CarTile';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            stuff: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        }
    }

    render(){
        return(
            <div className="container flex">
                {this.state.stuff.map((car) => <CarTile />)}
            </div>
        );
    }
}

export default Display;