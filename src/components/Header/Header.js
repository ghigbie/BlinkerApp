import React, {Component} from 'react';
import './Header.css';

const Header = (props) => {

    return(
        <div className="header">
            <div className="container">
                <h1>{props.title}</h1>
                <h3>{props.subtitle && props.subtitle}</h3>
            </div>
        </div>
    );
}

export default Header;