function init() {
  debug = new Debug(); // TODO: convert to singleton to eliminate global variable.
  new Game(3);
  document.getElementById('start-new-game').addEventListener('click', function() {
    document.getElementById('introduction').style.display = 'none';
   // document.getElementById('introduction').innerHTML="<p></p> <p></p><h2>Juego iniciado..</h2>";
  }, false);
}
window.addEventListener('load', init, false);
