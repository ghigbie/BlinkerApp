import React, {Component} from 'react';
import './CarTile.css';

import Modal from './../Modal/Modal';

class CarTile extends Component{
    modalID =`modal${this.props.uniqueID}`;
    carTitleName =`${this.props.year} ${this.props.make} ${this.props.model}`;

    render(){
        return(
            <div className="card car-card">
              <img className="card-img-top" 
                   src={this.props.image} 
                   alt="Card image cap"/>
              <div className="card-block container details flex-wrapper">
                <h4 className="card-title">{this.carTitleName}</h4>
                <p className="card-text">
                {`This ${this.carTitleName} only has ${this.props.mileage} miles. It\' a great car!`}
                </p>
              <button type="button" 
                      className="btn btn-outline-primary btn-bottom" 
                      data-toggle="modal" 
                      data-target={`#${this.modalID}`}>
                      More Information
                </button>
              </div>
              
              <Modal modalID={this.modalID}
                     year={this.props.year}
                     make={this.props.make}
                     model={this.props.model}
                     carTitleName={this.carTitleName}
                     mileage={this.props.mileage}
                     image={this.props.image}/>
            </div>
        );
    }
}

export default CarTile;
