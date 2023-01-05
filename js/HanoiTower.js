var resultado="";
var i=0;



function HanoiTower(){
    //inicializamos variables
    const disco=document.getElementById('disks-count');
    var discos=disco.value;
   
    if (isNaN(parseInt(discos))){
       alert("por favor introduce un número de discos correcto");
       return;
    }
    i=0;
    resultado="";
    var colorDisco= ["green","blue","pink","orage","grey","purple","red","yellow","brown"];
    var resultadoFinal=document.getElementById('Resultado-message');
    //Hacemos visible el resultado
    resultadoFinal.innerHTML="";
    resultadoFinal.style.display="inline";
    resultadoFinal.innerHTML="";
    
   resultadoFinal.innerHTML="<h4>Result " + discos + " Disks</h4>";
   colorDisco.splice(discos, colorDisco.length-discos);
   var colores=colorDisco.reverse();
   resultadoFinal.innerHTML=resultadoFinal.innerHTML + resultado;
   HanoiTowerFinal(discos, "1", "3", "2",colores);
   resultadoFinal.innerHTML=resultadoFinal.innerHTML + resultado;


    
}
function HanoiTowerFinal(discos, torreOrigen, torreDestino, torreApoyo, colores){
    
    
   
    if (discos == 1)
    {
        if (i==0){
            i++
        }

        resultado = resultado + " <p> "+ i.toString()+ ". Move disk " + colores[discos-1].toString() + " from tower " +  torreOrigen + " to tower " + torreDestino+"</p> ";
        i++;
        return;
    }
    HanoiTowerFinal(discos-1, torreOrigen, torreApoyo, torreDestino, colores);
    
    if (i==0){
        i++
    }
    resultado = resultado + " <p> " + i.toString()+ ". Move disk " + colores[discos-1].toString() + " from tower " +  torreOrigen+ " to tower " + torreDestino+ "</p> ";
    i++;
    HanoiTowerFinal(discos-1, torreApoyo, torreDestino, torreOrigen, colores);

}