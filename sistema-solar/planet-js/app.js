"use strict"



const planetas = document.querySelectorAll(".planet-section");

const saturno = document.querySelector(".planet-saturno")
const saturnoAnillo = document.querySelector(".saturno-anillo")
const saturnoInfo = document.querySelector("#saturno-info");



planetas.forEach(
  (planeta) => {
    console.log(planeta.firstElementChild)
    let info = planeta.nextElementSibling;
    planeta.firstElementChild.addEventListener(
      "mouseover",
      (e) => {
        info.style.display = `flex`
      }
    );

    planeta.firstElementChild.addEventListener(
      "mouseleave",
      (e) => {
        info.style.display = `none`
      }
    );

  }
);

saturnoAnillo.addEventListener(
  "mouseover",
  ()=>{
     saturnoInfo.style.display = `flex`;
    
  }
);
saturnoAnillo.addEventListener(
  "mouseleave",
()=> { saturnoInfo.style.display = `none`;
  }
);