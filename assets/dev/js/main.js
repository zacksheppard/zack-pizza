$(document).ready(function () { 
  var today = new Date();
  $.get(
    'https://blazing-heat-630.firebaseio.com/last_pizza.json', 
    function(data){
      var lastPizzaDate = new Date(data.date);
      var diff = daysBetween(today, lastPizzaDate);
      $('.pizza-count').text(diff);

      if (data.location && 0 !== data.location.length) {
        $('.location').append(
          '<h2>at: <span>' + data.location + '</span></h2>'
        );
      }
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