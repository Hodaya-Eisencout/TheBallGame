function onBallClick(elBall, maxDiameter) {
  var currentSize = elBall.offsetWidth;
  var randomSize = getRandomInt(20, 60);
  var newSize = currentSize + randomSize;

  if (newSize > maxDiameter) {
    newSize = 100;
  }

  elBall.style.width = newSize + 'px';
  elBall.style.height = newSize + 'px';

  elBall.innerText = newSize;
  elBall.style.backgroundColor = getRandomColor();
}