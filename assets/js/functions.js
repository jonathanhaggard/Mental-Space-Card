$( document ).ready(function() {

  lottie.loadAnimation({
  container: document.getElementById('lottie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/data.json' // the path to the animation json
});

});

var scene = document.getElementById('js-parallax-scene');
var parallax = new Parallax(scene);
