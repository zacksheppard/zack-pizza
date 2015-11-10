$(document).ready(function () { 
  rotate('.pizza', 360);
  $( ".pizza" ).animate({ "right": "-=50em" }, 2000 );
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