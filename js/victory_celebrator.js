function VictoryCelebrator(input_handler) {
  this.input_handler = input_handler;
}

VictoryCelebrator.prototype.on_victory = function() {
  this.input_handler.disable_input();
  document.getElementById('introduction').style.display = 'none';
  var victory_notification = document.getElementById('victory-notification');
  victory_notification.style.display = 'block';
  document.getElementById('victoria').innerHTML="<h3>¡Victoria!</h3>";
      document.getElementById('felicidades').innerHTML="Felicidades. Resolviste el misterio de la torre";
  document.getElementById('play-again').addEventListener('click', function() {
    const disco=document.getElementById('disks-count');
    var discos=disco.value;
   
    if (isNaN(parseInt(discos))){
       alert("por favor introduce un número de discos correcto");
       return;
    }
      //victory_notification.style.display = 'none';
      document.getElementById('victoria').innerHTML="<h4>Juega</h4>";
      document.getElementById('felicidades').innerHTML="";
      new Game(document.getElementById('disks-count').value);
  }, false);
}
