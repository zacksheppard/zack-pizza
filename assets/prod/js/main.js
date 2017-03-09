'use strict';

$(document).ready(function () {
  var pizza = React.createElement(Pizza, null);
  ReactDOM.render(pizza, document.querySelector('.react-root'));
  var today = new Date();
  $.get('http://zack.io/wp-json/wp/v2/zackio_pizza', function (data) {

    var lastPizzaDate = new Date(data[0].date);
    var diff = daysBetween(today, lastPizzaDate);
    $('.pizza-count').text(diff);

    if (data[0].title.rendered) {
      $('.location').append('<h2>at: <span>' + data[0].title.rendered + '</span></h2>');
    }

    rotate('.pizza-crust', 360);
    $(".pizza-crust").animate({ "right": "-=80em" }, 2000);
  });
});

function rotate(element, degrees) {
  var elem = $(element);
  $({ deg: 0 }).animate({ deg: degrees }, {
    duration: 2000,
    step: function step(now) {
      elem.css({
        transform: "rotate(" + now + "deg)"
      });
    }
  });
}

function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var diffDays = Math.floor(Math.abs((startDate.getTime() - endDate.getTime()) / millisecondsPerDay));
  return diffDays;
}

var Toppings = React.createClass({
  displayName: 'Toppings',

  render: function render() {
    var toppings = [];
    for (var i = 0; i < 17; i++) {
      toppings.push('pepperoni');
    }
    var preparedToppings = toppings.map(function (topping) {
      return React.createElement('div', { className: topping });
    });
    console.log(preparedToppings);

    return React.createElement(
      'div',
      null,
      preparedToppings
    );
  }
});

var Pizza = React.createClass({
  displayName: 'Pizza',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'pizza-crust' },
      React.createElement(
        'div',
        { className: 'pizza' },
        React.createElement('p', { className: 'pizza-count' }),
        React.createElement(Toppings, null)
      )
    );
  }
});
//# sourceMappingURL=main.js.map
