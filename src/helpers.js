export function daysSince(date) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var diffDays = Math.floor(
    Math.abs(( Date.now() - new Date(date).getTime() ) / millisecondsPerDay)
  );
  return diffDays;
}

export function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, 
    (match, unicodeValue) => String.fromCharCode(unicodeValue) 
  );
};

// function rotate(element, degrees) {
//   const elem = $(element);
//   $({ deg: 0 }).animate({ deg: degrees }, {
//     duration: 2000,
//     step: function step(now) {
//       elem.css({
//         transform: "rotate(" + now + "deg)"
//       });
//     }
//   });
// }