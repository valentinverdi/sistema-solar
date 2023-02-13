// -----------------SECTION3-------------------

const sec3BotonFlechaDer1 = document.querySelector(".section3__icon-flechaderecha1");
const sec3BotonFlechaDer2 = document.querySelector(".section3__icon-flechaderecha2");
const sec3BotonFlechaDer3 = document.querySelector(".section3__icon-flechaderecha3");
const sec3ContainerNoVisible1 = document.querySelector(".section3__containernovisible1");
const sec3ContainerNoVisible2 = document.querySelector(".section3__containernovisible2");
const sec3ContainerNoVisible3 = document.querySelector(".section3__containernovisible3");
const sec3ContainerVisible1 = document.querySelector(".section3__containervisible1");
const sec3ContainerVisible2 = document.querySelector(".section3__containervisible2");
const sec3ContainerVisible3 = document.querySelector(".section3__containervisible3");

let anchoVentana = document.documentElement.clientWidth;

sec3ContainerNoVisible1.style.display = "none";
sec3ContainerNoVisible2.style.display = "none";
sec3ContainerNoVisible3.style.display = "none";

sec3BotonFlechaDer1.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec3ContainerNoVisible1.style.display == "none") {
         sec3ContainerNoVisible1.style.display = "flex";
         sec3ContainerNoVisible1.style.animation = "moverDivALaDerecha 1s forwards";
         sec3BotonFlechaDer1.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec3ContainerNoVisible1.style.display == "flex") {
         sec3ContainerNoVisible1.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec3BotonFlechaDer1.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible1.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec3ContainerNoVisible1.style.display == "none") {
         sec3ContainerNoVisible1.style.display = "flex";
         sec3ContainerNoVisible1.style.animation = "aparecerTextoR 1s forwards";
         sec3ContainerVisible1.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec3BotonFlechaDer1.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec3ContainerNoVisible1.style.display == "flex") {
         sec3ContainerVisible1.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec3ContainerNoVisible1.style.animation = "desaparecerTextoR 1s forwards";
         sec3BotonFlechaDer1.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible1.style.display = "none", 1000);
      }
   }
})

sec3BotonFlechaDer2.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec3ContainerNoVisible2.style.display == "none") {
         sec3ContainerNoVisible2.style.display = "flex";
         sec3ContainerNoVisible2.style.animation = "moverDivALaDerecha 1s forwards";
         sec3BotonFlechaDer2.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec3ContainerNoVisible2.style.display == "flex") {
         sec3ContainerNoVisible2.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec3BotonFlechaDer2.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible2.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec3ContainerNoVisible2.style.display == "none") {
         sec3ContainerNoVisible2.style.display = "flex";
         sec3ContainerNoVisible2.style.animation = "aparecerTextoR 1s forwards";
         sec3ContainerVisible2.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec3BotonFlechaDer2.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec3ContainerNoVisible2.style.display == "flex") {
         sec3ContainerVisible2.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec3ContainerNoVisible2.style.animation = "desaparecerTextoR 1s forwards";
         sec3BotonFlechaDer2.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible2.style.display = "none", 1000);
      }
   }
})

sec3BotonFlechaDer3.addEventListener("click",()=>{
   if (anchoVentana >= 900) {
      if (sec3ContainerNoVisible3.style.display == "none") {
         sec3ContainerNoVisible3.style.display = "flex";
         sec3ContainerNoVisible3.style.animation = "moverDivALaDerecha 1s forwards";
         sec3BotonFlechaDer3.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (sec3ContainerNoVisible3.style.display == "flex") {
      sec3ContainerNoVisible3.style.animation = "volverDivDeLaDerecha 1s forwards";
         sec3BotonFlechaDer3.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible3.style.display = "none", 1000);
      }
   } else if (anchoVentana < 900) {
      if (sec3ContainerNoVisible3.style.display == "none") {
         sec3ContainerNoVisible3.style.display = "flex";
         sec3ContainerNoVisible3.style.animation = "aparecerTextoR 1s forwards";
         sec3ContainerVisible3.style.animation = "moverDivALaIzquierdaR 1s forwards";
         sec3BotonFlechaDer3.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (sec3ContainerNoVisible3.style.display == "flex") {
         sec3ContainerVisible3.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         sec3ContainerNoVisible3.style.animation = "desaparecerTextoR 1s forwards";
         sec3BotonFlechaDer3.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>sec3ContainerNoVisible3.style.display = "none", 1000);
      }
   }
})