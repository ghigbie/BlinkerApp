import React, {Component} from 'react';
import './CarTile.css';

class CarTile extends Component{
    render(){
        return(
            <div className="card car-card">
              <img className="card-img-top" 
                   src={this.props.image} 
                   alt="Card image cap"/>
              <div className="card-block container details">
                <h4 className="card-title">{`${this.props.year} ${this.props.make} ${this.props.model}`}</h4>
                <p className="card-text">
                {`This ${this.props.year} ${this.props.mmake} ${this.props.model} only has ${this.props.mileage} miles. It is a great car!`}
                </p>
                <a href="#" className="btn btn-outline-primary">{`More information about this ${this.props.make} ${this.props.model}`}</a>
              </div>
            </div>
        );
    }
}
export default CarTile;
