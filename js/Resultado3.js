function Resultado3(){
  const disco=document.getElementById('discos');
  discos=disco.value;
  var resultadoFinal;
  if (discos==3) {
    document.getElementById('Resultado-message2').style.display="none";
    resultadoFinal = document.getElementById('Resultado-message');
    resultadoFinal.style.display="inline"
  }
  else if (discos==4){
    document.getElementById('Resultado-message').style.display="none";
    resultadoFinal = document.getElementById('Resultado-message2');
    resultadoFinal.style.display="inline"
  }
  else if (discos==5){
    alert('5 discos')
  }
  else {
    alert('El número de discos es incorrecto')
  }

}