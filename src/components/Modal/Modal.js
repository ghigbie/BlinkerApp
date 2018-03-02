import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return(
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{`${props.year} ${props.make} ${props.model}`}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
        
                <p> {`This ${this.props.year} ${this.props.mmake} ${this.props.model} only /
                has ${this.props.mileage} miles. It\' a great car! This is a lot of detail about this car.`}</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt /
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco /
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in /
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat/
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
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
