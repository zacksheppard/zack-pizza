$(document).ready(function () { 
  var today = new Date();
  $.get(
    'https://blazing-heat-630.firebaseio.com/last_pizza_date.json', 
    function(data){
      var lastPizzaDate = new Date(data);
      var diff = daysBetween(today, lastPizzaDate);
      $('.pizza-count').text(diff);
    }
  );

  rotate('.pizza-crust', 360);
  $(".pizza-crust").animate({"right": "-=80em"}, 2000 );
});

function rotate(element, degrees){
  var elem = $(element);
  $({deg: 0}).animate({deg: degrees}, {
    duration: 2000,
    step: function(now){
      elem.css({
        transform: "rotate(" + now + "deg)"
      });
    }
  });
}

function daysBetween(startDate, endDate){
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var diffDays = Math.floor(Math.abs((startDate.getTime() - endDate.getTime())/(millisecondsPerDay)));
  return diffDays;
}

function randBetween(lowerLimit, upperLimit){
  return Math.floor((Math.random() * upperLimit) + lowerLimit);
}