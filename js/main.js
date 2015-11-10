$(document).ready(function () { 
  AnimateRotate(360)
});

function AnimateRotate(d){
    var elem = $(".pizza");

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}