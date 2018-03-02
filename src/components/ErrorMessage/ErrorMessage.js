import React, {Component} from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    return(
        <h3>{props.errorMessage}</h3>
    );
};

export default ErrorMessage;