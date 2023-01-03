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
    var colorDisco= ["verde","azul","rosa","naranja","gris","morado","rojo","amarillo","café"];
    var resultadoFinal=document.getElementById('Resultado-message');
    //Hacemos visible el resultado
    resultadoFinal.innerHTML="";
    resultadoFinal.style.display="inline";
    resultadoFinal.innerHTML="";
    
   resultadoFinal.innerHTML="<h4>Resultado " + discos + " Discos</h4>";
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

        resultado = resultado + " <p> "+ i.toString()+ ". Mueve disco " + colores[discos-1].toString() + " desde torre " +  torreOrigen + " a torre " + torreDestino+"</p> ";
        i++;
        return;
    }
    HanoiTowerFinal(discos-1, torreOrigen, torreApoyo, torreDestino, colores);
    
    if (i==0){
        i++
    }
    resultado = resultado + " <p> " + i.toString()+ ". Mueve disco " + colores[discos-1].toString() + " desde torre " +  torreOrigen+ " a torre " + torreDestino+ "</p> ";
    i++;
    HanoiTowerFinal(discos-1, torreApoyo, torreDestino, torreOrigen, colores);

}