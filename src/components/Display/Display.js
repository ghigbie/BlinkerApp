import React, {Component} from 'react';
import axios from 'axios';
import './Display.css';

import SearchBar from './../SearchBar/SearchBar';
import CarTile from './../CarTile/CarTile';
import ErrorMessage from './../ErrorMessage/ErrorMessage';

class Display extends Component{
    state = {
            carList: []
    }

    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
        .then(response => {
            this.setState({carList: response.data});
        })
        .catch(error => {
            const errorMessage = 'We\'re sorry. Something went wrong : (';
            this.state({errorMessage: errorMessage});
        });
    }

    sortingMethod(sortingValue){
        let sortedArray = [];
        //this.state.carList
    }

    render(props){
        console.log("Props" + this.props.carlist);
        console.log("State" + this.state.carlist);
        const cars = this.state.carList.map((car, index) => 
                    (<CarTile key={index}
                              uniqueID={index}
                              year={car.year}
                              make={car.make}
                              model={car.model}
                              price={car.price}
                              mileage={car.mileage}
                              image={car.image_url}/>));
        
        const error = (<ErrorMessage errorMessage={this.props.errorMessage} />);
        
        return(
            <div className="container flex">
                <SearchBar />
                {this.props.errorMessage? error : cars}
            </div>
        );
    }
}

export default Display;