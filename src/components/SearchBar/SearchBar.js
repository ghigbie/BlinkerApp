import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    style = {
        width: '80%',
        marginLeft: '10%'
    };
    
    render(){
        return(
            <input type="text" 
                   className="form-control"
                   style={this.style}
                   id="search-bar"
                   placeholder="Search for a car..." />
        );
    }
}

export default SearchBar;