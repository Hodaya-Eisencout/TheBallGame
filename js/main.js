function onBallClick() {
  var elBall = document.querySelector('.ball');

  var currentSize = elBall.offsetWidth;
  var randomSize = getRandomInt(20, 60);
  var newSize = currentSize + randomSize;

  if (newSize > 400) {
    newSize = 100;
  }

  elBall.style.width = newSize + 'px';
  elBall.style.height = newSize + 'px';

  elBall.innerText = newSize;

  elBall.style.backgroundColor = getRandomColor();
}