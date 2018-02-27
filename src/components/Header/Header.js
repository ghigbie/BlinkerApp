import React, {Component} from 'react';
import './header.css';

const Header = (props) => {

    return(
        <div class="header">
            <div className="container">
                <h1>{props.title}</h1>
                <h3>{props.subtitle && props.subtitle}</h3>
            </div>
        </div>
    );
}