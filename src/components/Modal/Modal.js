import React from 'react';
import './Modal.css';

const Modal = (props) => {
    const carTitleName = `${props.year} ${props.make} ${props.model}`; 
    return(
        <div className="modal fade" id={props.modalID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{`${props.year} ${props.make} ${props.model}`}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body container">
                <img className='modal-car-image' 
                     src={props.image} 
                     alt={`Image of ${props.year} ${props.make} ${props.model}`}/>
        
                <p className="detailed-description"> This <strong>{`${props.year} ${props.make} ${props.model }`}</strong>
                only has {props.mileage} miles. It' a great car!</p> 
                
                <p>Below is a lot more detail about this car. If your Latin is good, then you can read about
                it, because Latin is a very useful language for describing vehicles.</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy This Car!</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Modal;
