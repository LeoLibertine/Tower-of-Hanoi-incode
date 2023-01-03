
function iniciarJuego() {
    
    const disco=document.getElementById('disks-count');
    var discos=disco.value;
   
    if (isNaN(parseInt(discos))){
       
       return;
    }
    //victory_notification.style.display = 'none';
    document.getElementById('Resultado-message').style.display="none";
    new Game(5);

}
