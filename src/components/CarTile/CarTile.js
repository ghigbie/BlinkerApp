import React, {Component} from 'react';
import './CarTile.css';

class CarTile extends Component{
    render(){
        return(
            <div className="card car-card">
              <img className="card-img-top" 
                   src="https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" 
                   alt="Card image cap"/>
              <div className="card-block container details">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary">Go somewhere</a>
              </div>
            </div>
        );
    }
}
export default CarTile;
