function VictoryCelebrator(input_handler) {
  this.input_handler = input_handler;
}

VictoryCelebrator.prototype.on_victory = function() {
  this.input_handler.disable_input();
  document.getElementById('introduction').style.display = 'none';
  var victory_notification = document.getElementById('victory-notification');
  victory_notification.style.display = 'block';
  document.getElementById('victoria').innerHTML="<h3>Victory!</h3>";
      document.getElementById('felicidades').innerHTML="Congratulations. You solved the mystery of the tower";
  document.getElementById('play-again').addEventListener('click', function() {
    const disco=document.getElementById('disks-count');
    var discos=disco.value;
   
    if (isNaN(parseInt(discos))){
       alert("please enter a correct number of disks");
       return;
    }
      //victory_notification.style.display = 'none';
      document.getElementById('victoria').innerHTML="<h4>Play</h4>";
      document.getElementById('felicidades').innerHTML="";
      new Game(document.getElementById('disks-count').value);
  }, false);
}
