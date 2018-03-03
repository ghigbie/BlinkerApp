import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    const style = { margin: '5% auto 5% auto'};
    
    return(
        <h3 style={style}>{props.errorMessage}</h3>
    );
};

export default ErrorMessage;