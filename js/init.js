function init() {
  
  debug = new Debug(); // TODO: convert to singleton to eliminate global variable.
  new Game(3);
  document.getElementById('start-new-game').addEventListener('click', function() {
    
    const disco=document.getElementById('disks-count');
    var discos=disco.value;
 
  if (isNaN(parseInt(discos))){
     alert("por favor introduce un número de discos correcto 2");
     return;
  }
    document.getElementById('introduction').style.display = 'none';
   // document.getElementById('introduction').innerHTML="<p></p> <p></p><h2>Juego iniciado..</h2>";
  }, false);
}
window.addEventListener('load', init, false);
