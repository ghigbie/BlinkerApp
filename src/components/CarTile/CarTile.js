import React, {Component} from 'react';
import './CarTile.css';

class CarTile extends Component{
    render(){
        return(
            <div>
            <div className="card product-card">
                <img className="card-img-top third" 
                     src="https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
                     alt="Car Image"/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="www.google.com" className="btn btn-primary">More Information</a>
                </div>
            </div>
            
            <div class="card" style="width: 20rem;">
              <img class="card-img-top" 
                   src="https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" 
                   alt="Card image cap"/>
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            <div class="card card-inverse">
              <img class="card-img" 
                    src="https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" 
                    alt="Card image" />
              <div class="card-img-overlay">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
            </div>
            
            
            </div>
        );
    }
}

export default CarTile;
