import React, {Component} from 'react';
import './CarTile.css';

import Modal from './../Modal/Modal';

class CarTile extends Component{
    modalID =`modal${this.props.uniqueID}`

    render(){
        return(
            <div className="card car-card">
              <img className="card-img-top" 
                   src={this.props.image} 
                   alt="Card image cap"/>
              <div className="card-block container details">
                <h4 className="card-title">{`${this.props.year} ${this.props.make} ${this.props.model}`}</h4>
                <p className="card-text">
                {`This ${this.props.year} ${this.props.mmake} ${this.props.model} only has ${this.props.mileage} miles. It\' a great car!`}
                </p>
              <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={`#${this.modalID}`}>
                More Information
                </button>
              </div>
              
              <Modal modalID={this.modalID}
                     year={this.props.year}
                     make={this.props.make}
                     model={this.props.model}
                     mileage={this.props.mileage}
                     image={this.props.image}/>
            </div>
        );
    }
}

export default CarTile;
