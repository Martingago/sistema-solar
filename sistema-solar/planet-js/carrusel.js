`use strict`

let atras = document.querySelector("#atras");
let adelante = document.querySelector("#siguiente");
let carrusel = document.querySelector(".carrusel-section")
let posicion = 0;
let carruselPosition = document.querySelectorAll(".informacion-carrusel");

window.onload
    {carruselPosition[0].style.opacity = `1`;}

function limpiarCarrusel(){
    for(let i=0; i<carruselPosition.length; i++){
        carruselPosition[i].style.opacity = `0`;
        console.log("posicion:"+posicion)
    }

}
function seleccionarCarrusel(){
 
}
atras.addEventListener(
    "click",
    ()=> {
       
        posicion--;
        limpiarCarrusel();
    if (posicion <0){posicion = 7};
        carrusel.style.transform = `rotateY(` + -45 * posicion + `deg)`;
        carruselPosition[posicion].style.opacity = `1`;
    
        console.log(posicion);
    } 
);

adelante.addEventListener(
    "click",
    ()=>{
        posicion++;
        limpiarCarrusel();
    if(posicion >7){posicion= 0};
        carrusel.style.transform = `rotateY(` + -45 * posicion + `deg)`;
        carruselPosition[posicion].style.opacity = `1`;
        
   
        console.log(posicion);
        
    }
)
console.log(carruselPosition.length)


