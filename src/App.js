import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import PaintingList from "./components/paintingList";
import ArtPage from "./components/ArtPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  inventory = [
    { name: "Apple", price: 1.99 },
    { name: "Loaf of Bread", price: 1.5 },
    { name: "Space", price: 2.5 
  

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function hasn't.
  
  


    // Get the current cart
    state.cart(item)
    const cart = this.state.cart;
    // Get the index of the item that we are looking for. Will return -1 if it is not on the list
    let index = cart.indexOf(item);
    // If the item is on the list, remove it
    if (index !== -1) {
      cart.splice(index, 1);
    }
    // Update the state with the new cart
    this.setState((state) => {
      return state;
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
      </div>
    );
  }
}

export default App;
