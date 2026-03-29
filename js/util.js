
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}