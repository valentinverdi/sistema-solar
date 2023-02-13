// -----------------SECTION4-------------------

const sec4BotonFlechaDer1 = document.querySelector(".section4__icon-flechaderecha1");
const sec4BotonFlechaDer2 = document.querySelector(".section4__icon-flechaderecha2");
const sec4BotonFlechaDer3 = document.querySelector(".section4__icon-flechaderecha3");
const sec4ContainerNoVisible1 = document.querySelector(".section4__containernovisible1");
const sec4ContainerNoVisible2 = document.querySelector(".section4__containernovisible2");
const sec4ContainerNoVisible3 = document.querySelector(".section4__containernovisible3");
const sec4ContainerVisible1 = document.querySelector(".section4__containervisible1");
const sec4ContainerVisible2 = document.querySelector(".section4__containervisible2");
const sec4ContainerVisible3 = document.querySelector(".section4__containervisible3");

let anchoVentana = document.documentElement.clientWidth;

sec4ContainerNoVisible1.style.display = "none";
sec4ContainerNoVisible2.style.display = "none";
sec4ContainerNoVisible3.style.display = "none";

sec4BotonFlechaDer1.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec4ContainerNoVisible1.style.display == "none") {
         sec4ContainerNoVisible1.style.display = "flex";
         sec4ContainerNoVisible1.style.animation = "moverDivALaDerecha 1s forwards";
         sec4BotonFlechaDer1.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec4ContainerNoVisible1.style.display == "flex") {
         sec4ContainerNoVisible1.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec4BotonFlechaDer1.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible1.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec4ContainerNoVisible1.style.display == "none") {
         sec4ContainerNoVisible1.style.display = "flex";
         sec4ContainerNoVisible1.style.animation = "aparecerTextoR 1s forwards";
         sec4ContainerVisible1.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec4BotonFlechaDer1.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec4ContainerNoVisible1.style.display == "flex") {
         sec4ContainerVisible1.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec4ContainerNoVisible1.style.animation = "desaparecerTextoR 1s forwards";
         sec4BotonFlechaDer1.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible1.style.display = "none", 1000);
      }
   }
})

sec4BotonFlechaDer2.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec4ContainerNoVisible2.style.display == "none") {
         sec4ContainerNoVisible2.style.display = "flex";
         sec4ContainerNoVisible2.style.animation = "moverDivALaDerecha 1s forwards";
         sec4BotonFlechaDer2.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec4ContainerNoVisible2.style.display == "flex") {
         sec4ContainerNoVisible2.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec4BotonFlechaDer2.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible2.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec4ContainerNoVisible2.style.display == "none") {
         sec4ContainerNoVisible2.style.display = "flex";
         sec4ContainerNoVisible2.style.animation = "aparecerTextoR 1s forwards";
         sec4ContainerVisible2.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec4BotonFlechaDer2.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec4ContainerNoVisible2.style.display == "flex") {
         sec4ContainerVisible2.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec4ContainerNoVisible2.style.animation = "desaparecerTextoR 1s forwards";
         sec4BotonFlechaDer2.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible2.style.display = "none", 1000);
      }
   }
})

sec4BotonFlechaDer3.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec4ContainerNoVisible3.style.display == "none") {
         sec4ContainerNoVisible3.style.display = "flex";
         sec4ContainerNoVisible3.style.animation = "moverDivALaDerecha 1s forwards";
         sec4BotonFlechaDer3.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec4ContainerNoVisible3.style.display == "flex") {
      sec4ContainerNoVisible3.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec4BotonFlechaDer3.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible3.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec4ContainerNoVisible3.style.display == "none") {
         sec4ContainerNoVisible3.style.display = "flex";
         sec4ContainerNoVisible3.style.animation = "aparecerTextoR 1s forwards";
         sec4ContainerVisible3.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec4BotonFlechaDer3.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec4ContainerNoVisible3.style.display == "flex") {
         sec4ContainerVisible3.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec4ContainerNoVisible3.style.animation = "desaparecerTextoR 1s forwards";
         sec4BotonFlechaDer3.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec4ContainerNoVisible3.style.display = "none", 1000);
      }
   }
})


// -----------------SECTION5-------------------

const sec5BotonFlechaDer1 = document.querySelector(".section5__icon-flechaderecha1");
const sec5BotonFlechaDer2 = document.querySelector(".section5__icon-flechaderecha2");
const sec5BotonFlechaDer3 = document.querySelector(".section5__icon-flechaderecha3");
const sec5ContainerNoVisible1 = document.querySelector(".section5__containernovisible1");
const sec5ContainerNoVisible2 = document.querySelector(".section5__containernovisible2");
const sec5ContainerNoVisible3 = document.querySelector(".section5__containernovisible3");
const sec5ContainerVisible1 = document.querySelector(".section5__containervisible1");
const sec5ContainerVisible2 = document.querySelector(".section5__containervisible2");
const sec5ContainerVisible3 = document.querySelector(".section5__containervisible3");

sec5ContainerNoVisible1.style.display = "none";
sec5ContainerNoVisible2.style.display = "none";
sec5ContainerNoVisible3.style.display = "none";

sec5BotonFlechaDer1.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec5ContainerNoVisible1.style.display == "none") {
         sec5ContainerNoVisible1.style.display = "flex";
         sec5ContainerNoVisible1.style.animation = "moverDivALaDerecha 1s forwards";
         sec5BotonFlechaDer1.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec5ContainerNoVisible1.style.display == "flex") {
         sec5ContainerNoVisible1.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec5BotonFlechaDer1.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible1.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec5ContainerNoVisible1.style.display == "none") {
         sec5ContainerNoVisible1.style.display = "flex";
         sec5ContainerNoVisible1.style.animation = "aparecerTextoR 1s forwards";
         sec5ContainerVisible1.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec5BotonFlechaDer1.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec5ContainerNoVisible1.style.display == "flex") {
         sec5ContainerVisible1.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec5ContainerNoVisible1.style.animation = "desaparecerTextoR 1s forwards";
         sec5BotonFlechaDer1.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible1.style.display = "none", 1000);
      }
   }
})

sec5BotonFlechaDer2.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec5ContainerNoVisible2.style.display == "none") {
         sec5ContainerNoVisible2.style.display = "flex";
         sec5ContainerNoVisible2.style.animation = "moverDivALaDerecha 1s forwards";
         sec5BotonFlechaDer2.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec5ContainerNoVisible2.style.display == "flex") {
         sec5ContainerNoVisible2.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec5BotonFlechaDer2.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible2.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec5ContainerNoVisible2.style.display == "none") {
         sec5ContainerNoVisible2.style.display = "flex";
         sec5ContainerNoVisible2.style.animation = "aparecerTextoR 1s forwards";
         sec5ContainerVisible2.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec5BotonFlechaDer2.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec5ContainerNoVisible2.style.display == "flex") {
         sec5ContainerVisible2.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec5ContainerNoVisible2.style.animation = "desaparecerTextoR 1s forwards";
         sec5BotonFlechaDer2.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible2.style.display = "none", 1000);
      }
   }
})

sec5BotonFlechaDer3.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec5ContainerNoVisible3.style.display == "none") {
         sec5ContainerNoVisible3.style.display = "flex";
         sec5ContainerNoVisible3.style.animation = "moverDivALaDerecha 1s forwards";
         sec5BotonFlechaDer3.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec5ContainerNoVisible3.style.display == "flex") {
      sec5ContainerNoVisible3.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec5BotonFlechaDer3.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible3.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec5ContainerNoVisible3.style.display == "none") {
         sec5ContainerNoVisible3.style.display = "flex";
         sec5ContainerNoVisible3.style.animation = "aparecerTextoR 1s forwards";
         sec5ContainerVisible3.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec5BotonFlechaDer3.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec5ContainerNoVisible3.style.display == "flex") {
         sec5ContainerVisible3.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec5ContainerNoVisible3.style.animation = "desaparecerTextoR 1s forwards";
         sec5BotonFlechaDer3.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec5ContainerNoVisible3.style.display = "none", 1000);
      }
   }
})

