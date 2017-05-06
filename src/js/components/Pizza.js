import React, { Component } from 'react';
import Toppings from './Toppings';

class Pizza extends Component {
  render() {
    return (
      <div className="pizza-crust">
        <div className="pizza">
          <p className="pizza-count">{this.props.daysSince}</p>
        </div>
        <Toppings />
      </div>
    )
  }
}

export default Pizza;