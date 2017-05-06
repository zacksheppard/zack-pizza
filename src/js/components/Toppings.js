import React, { Component } from 'react';

class Toppings extends Component {
  render() {
    const toppings = [];
    for (let i=0; i < 17; i++) { toppings.push('pepperoni'); }
    const preparedToppings = toppings.map((topping, i) => { 
      return <div className={topping} key={i}></div>;
    });

    return(
      <div>{preparedToppings}</div>
    )
  }
}

export default Toppings;