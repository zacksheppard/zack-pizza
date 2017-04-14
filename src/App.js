import React from 'react';
import './App.css';

import Pizza from './Pizza';
import CheckIn from './CheckIn';
import { daysSince } from './helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pizzas: []
    }

    this.getPizzas  = this.getPizzas.bind(this);

    this.getPizzas();
  }

  getPizzas() {
    fetch('http://zack.io/wp-json/wp/v2/zackio_pizza?_embed')
      .then(response => response.json())
      .then(json => {
        if(json.length > 0) {
          this.setState({ pizzas: json });
        }
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="layout-main">
              <h1 className="headline">Days since last pizza:</h1>
              <div className="col-md-12 col-sm-12 col-xs-12 table">
                <CSSTransitionGroup 
                  component="div"
                  transitionName="rollin"
                  transitionEnterTimeout={2000}
                  transitionLeaveTimeout={2000}
                >
                {this.state.pizzas.length > 0 &&
                  <Pizza 
                    key="1" 
                    daysSince={daysSince(this.state.pizzas[0].date)} />
                }
                </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="wall">
          <div className="container">

            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 pizza-list">
            </div>
            <div className="row">
                <h1 className="headline">Recent pizzas</h1>
                  {this.state.pizzas
                    .map( (pizza, i) => <CheckIn key={i} details={pizza} />)
                  }
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
