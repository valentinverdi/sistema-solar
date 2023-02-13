// ---------------SECTION4------------------
const sec4ContainerNoVisible = document.querySelector(".section4__containernovisible");
const sec4Btn = document.querySelector(".section4__containervisible-btn");
const sec4HeightDiv = window.getComputedStyle(sec4ContainerNoVisible).height;

sec4ContainerNoVisible.style.height = "0px";
sec4ContainerNoVisible.style.transition = "height 1s";
sec4ContainerNoVisible.style.border = "none";

sec4Btn.addEventListener("click", ()=>{
    if (sec4ContainerNoVisible.style.height == "0px") {
        sec4ContainerNoVisible.style.height = `${sec4HeightDiv}`;
        sec4ContainerNoVisible.style.border = "1px solid #fff";
        sec4Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec4ContainerNoVisible.style.height == `${sec4HeightDiv}`) {
        sec4ContainerNoVisible.style.height = "0px";
        sec4ContainerNoVisible.style.border = "none";
        sec4Btn.style.animation = "desrotarBtn 1s forwards";
    }
})

// ---------------SECTION5------------------
const sec5ContainerNoVisible = document.querySelector(".section5__containernovisible");
const sec5Btn = document.querySelector(".section5__containervisible-btn");
const sec5HeightDiv = window.getComputedStyle(sec5ContainerNoVisible).height;

sec5ContainerNoVisible.style.height = "0px";
sec5ContainerNoVisible.style.transition = "height 1s";
sec5ContainerNoVisible.style.border = "none";

sec5Btn.addEventListener("click", ()=>{
    if (sec5ContainerNoVisible.style.height == "0px") {
        sec5ContainerNoVisible.style.height = `${sec5HeightDiv}`;
        sec5ContainerNoVisible.style.border = "1px solid #fff";
        sec5Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec5ContainerNoVisible.style.height == `${sec5HeightDiv}`) {
        sec5ContainerNoVisible.style.height = "0px";
        sec5ContainerNoVisible.style.border = "none";
        sec5Btn.style.animation = "desrotarBtn 1s forwards";
    }
})

// ---------------SECTION6------------------
const sec6ContainerNoVisible = document.querySelector(".section6__containernovisible");
const sec6Btn = document.querySelector(".section6__containervisible-btn");
const sec6HeightDiv = window.getComputedStyle(sec6ContainerNoVisible).height;

sec6ContainerNoVisible.style.height = "0px";
sec6ContainerNoVisible.style.transition = "height 1s";
sec6ContainerNoVisible.style.border = "none";

sec6Btn.addEventListener("click", ()=>{   
    if (sec6ContainerNoVisible.style.height == "0px") {
        sec6ContainerNoVisible.style.height = `${sec6HeightDiv}`;
        sec6ContainerNoVisible.style.border = "1px solid #fff";
        sec6Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec6ContainerNoVisible.style.height == `${sec6HeightDiv}`) {
        sec6ContainerNoVisible.style.height = "0px";
        sec6ContainerNoVisible.style.border = "none";
        sec6Btn.style.animation = "desrotarBtn 1s forwards";
    }
})

// ---------------SECTION7------------------
const sec7ContainerNoVisible = document.querySelector(".section7__containernovisible");
const sec7Btn = document.querySelector(".section7__containervisible-btn");
const sec7HeightDiv = window.getComputedStyle(sec7ContainerNoVisible).height;

sec7ContainerNoVisible.style.height = "0px";
sec7ContainerNoVisible.style.transition = "height 1s";
sec7ContainerNoVisible.style.border = "none";

sec7Btn.addEventListener("click", ()=>{   
    if (sec7ContainerNoVisible.style.height == "0px") {
        sec7ContainerNoVisible.style.height = `${sec7HeightDiv}`;
        sec7ContainerNoVisible.style.border = "1px solid #fff";
        sec7Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec7ContainerNoVisible.style.height == `${sec7HeightDiv}`) {
        sec7ContainerNoVisible.style.height = "0px";
        sec7ContainerNoVisible.style.border = "none";
        sec7Btn.style.animation = "desrotarBtn 1s forwards";
    }
})

// -----------------SECTION8-------------------

const sec8BotonFlechaDer1 = document.querySelector(".section8__icon-flechaderecha1");
const sec8BotonFlechaDer2 = document.querySelector(".section8__icon-flechaderecha2");
const sec8BotonFlechaDer3 = document.querySelector(".section8__icon-flechaderecha3");
const sec8ContainerNoVisible1 = document.querySelector(".section8__containernovisible1");
const sec8ContainerNoVisible2 = document.querySelector(".section8__containernovisible2");
const sec8ContainerNoVisible3 = document.querySelector(".section8__containernovisible3");
const sec8ContainerVisible1 = document.querySelector(".section8__containervisible1");
const sec8ContainerVisible2 = document.querySelector(".section8__containervisible2");
const sec8ContainerVisible3 = document.querySelector(".section8__containervisible3");

let anchoVentana = document.documentElement.clientWidth;

sec8ContainerNoVisible1.style.display = "none";
sec8ContainerNoVisible2.style.display = "none";
sec8ContainerNoVisible3.style.display = "none";

sec8BotonFlechaDer1.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec8ContainerNoVisible1.style.display == "none") {
         sec8ContainerNoVisible1.style.display = "flex";
         sec8ContainerNoVisible1.style.animation = "moverDivALaDerecha 1s forwards";
         sec8BotonFlechaDer1.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec8ContainerNoVisible1.style.display == "flex") {
         sec8ContainerNoVisible1.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec8BotonFlechaDer1.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible1.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec8ContainerNoVisible1.style.display == "none") {
         sec8ContainerNoVisible1.style.display = "flex";
         sec8ContainerNoVisible1.style.animation = "aparecerTextoR 1s forwards";
         sec8ContainerVisible1.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec8BotonFlechaDer1.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec8ContainerNoVisible1.style.display == "flex") {
         sec8ContainerVisible1.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec8ContainerNoVisible1.style.animation = "desaparecerTextoR 1s forwards";
         sec8BotonFlechaDer1.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible1.style.display = "none", 1000);
      }
   }
})

sec8BotonFlechaDer2.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec8ContainerNoVisible2.style.display == "none") {
         sec8ContainerNoVisible2.style.display = "flex";
         sec8ContainerNoVisible2.style.animation = "moverDivALaDerecha 1s forwards";
         sec8BotonFlechaDer2.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec8ContainerNoVisible2.style.display == "flex") {
         sec8ContainerNoVisible2.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec8BotonFlechaDer2.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible2.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec8ContainerNoVisible2.style.display == "none") {
         sec8ContainerNoVisible2.style.display = "flex";
         sec8ContainerNoVisible2.style.animation = "aparecerTextoR 1s forwards";
         sec8ContainerVisible2.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec8BotonFlechaDer2.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec8ContainerNoVisible2.style.display == "flex") {
         sec8ContainerVisible2.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec8ContainerNoVisible2.style.animation = "desaparecerTextoR 1s forwards";
         sec8BotonFlechaDer2.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible2.style.display = "none", 1000);
      }
   }
})

sec8BotonFlechaDer3.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec8ContainerNoVisible3.style.display == "none") {
         sec8ContainerNoVisible3.style.display = "flex";
         sec8ContainerNoVisible3.style.animation = "moverDivALaDerecha 1s forwards";
         sec8BotonFlechaDer3.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec8ContainerNoVisible3.style.display == "flex") {
      sec8ContainerNoVisible3.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec8BotonFlechaDer3.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible3.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec8ContainerNoVisible3.style.display == "none") {
         sec8ContainerNoVisible3.style.display = "flex";
         sec8ContainerNoVisible3.style.animation = "aparecerTextoR 1s forwards";
         sec8ContainerVisible3.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec8BotonFlechaDer3.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec8ContainerNoVisible3.style.display == "flex") {
         sec8ContainerVisible3.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec8ContainerNoVisible3.style.animation = "desaparecerTextoR 1s forwards";
         sec8BotonFlechaDer3.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec8ContainerNoVisible3.style.display = "none", 1000);
      }
   }
})