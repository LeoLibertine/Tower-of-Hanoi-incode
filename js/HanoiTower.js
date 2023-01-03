var resultado="";


function HanoiTower(){
    resultado="";
    var resultadoFinal=document.getElementById('Resultado-message');
    //Hacemos visible el resultado
    resultadoFinal.innerHTML="";
    resultadoFinal.style.display="inline";
    resultadoFinal.innerHTML="";
    const disco=document.getElementById('discos');
    var discos=disco.value;
   resultadoFinal.innerHTML="<h4>Resultado " + discos + " Discos</h4>";
   resultadoFinal.innerHTML=resultadoFinal.innerHTML + resultado;
   HanoiTowerFinal(discos, "A", "C", "B");
   resultadoFinal.innerHTML=resultadoFinal.innerHTML + resultado;


    
}
function HanoiTowerFinal(discos, torreOrigen, torreDestino, torreApoyo){
    
   
    if (discos == 1)
    {
        resultado = resultado + " <p>Mueve disco 1 desde torre " +  torreOrigen + " a torre " + torreDestino+"</p> ";
        return;
    }
    HanoiTowerFinal(discos-1, torreOrigen, torreApoyo, torreDestino);
    resultado = resultado + " <p>Mueve disco " + discos + " desde torre " +  torreOrigen+ " a torre " + torreDestino+ "</p> ";
    HanoiTowerFinal(discos-1, torreApoyo, torreDestino, torreOrigen);

}