import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    render(){
        return(
            <input type="text" 
                   className="form-control"
                   id="search-bar"
                   placeholder="Search for a car..." />
        );
    }
}

export default SearchBar;