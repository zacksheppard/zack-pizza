$(document).ready(function () {
  const pizza = (<Pizza></Pizza>);
  ReactDOM.render(pizza, document.querySelector('.layout-main'));
  const today = new Date();
  $.get('http://zack.io/wp-json/wp/v2/zackio_pizza', function (data) {

    const lastPizzaDate = new Date(data[0].date);
    const diff = daysBetween(today, lastPizzaDate);
    $('.pizza-count').text(diff);

    if (data[0].title.rendered) {
      $('.location').append('<h2>at: <span>' + data[0].title.rendered + '</span></h2>');
    }

    rotate('.pizza-crust', 360);
    $(".pizza-crust").animate({ "right": "-=80em" }, 2000);

  });

});

function rotate(element, degrees) {
  const elem = $(element);
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
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor(
    Math.abs((startDate.getTime() - endDate.getTime()) / millisecondsPerDay)
  );
  return diffDays;
}


const Toppings = React.createClass({
  render: function() {
    const toppings = [];
    for (let i=0; i < 17; i++) { toppings.push('pepperoni'); }
    const preparedToppings = toppings.map((topping) => { 
      return <div className={topping}></div>;
    });
    console.log(preparedToppings);

    return(
      <div>{preparedToppings}</div>
    )
  }
});

const Pizza = React.createClass({
  render: function() {
    return (
      <div className="pizza-crust">
        <div className="pizza">
          <p className="pizza-count"></p>
          <Toppings />
        </div>
      </div>
    )
  }
});

