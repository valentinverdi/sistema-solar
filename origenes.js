const botonFlechaDer = document.querySelector(".section2__icon-flechaderecha");
const botonFlechaIzq = document.querySelector(".section2__icon-flechaizquierda");
const containerNoVisible1 = document.querySelector(".section2__containernovisible1");
const containerNoVisible2 = document.querySelector(".section2__containernovisible2");
const containerVisible1 = document.querySelector(".section2__containervisible1");
const containerVisible2 = document.querySelector(".section2__containervisible2");

let anchoVentana = document.documentElement.clientWidth;

containerNoVisible1.style.display = "none";
containerNoVisible2.style.display = "none";

botonFlechaDer.addEventListener("click",()=>{
   if (anchoVentana >= 600) {
      if (containerNoVisible1.style.display == "none") {
         containerNoVisible1.style.display = "flex";
         containerNoVisible1.style.animation = "moverDivALaDerecha 1s forwards";
         botonFlechaDer.style.animation = "moverBotonALaDerecha 1s forwards";
      } else if (containerNoVisible1.style.display == "flex") {
         containerNoVisible1.style.animation = "volverDivDeLaDerecha 1s forwards";
         botonFlechaDer.style.animation = "volverBotonDeLaDerecha 1s forwards";
         setTimeout(()=>containerNoVisible1.style.display = "none", 1000);
      }
   } else if (anchoVentana < 600) {
      if (containerNoVisible1.style.display == "none") {
         containerNoVisible1.style.display = "flex";
         containerNoVisible1.style.animation = "aparecerTextoR 1s forwards";
         containerVisible1.style.animation = "moverDivALaIzquierdaR 1s forwards";
         botonFlechaDer.style.animation = "moverBotonALaIzquierdaR 1s forwards";
      } else if (containerNoVisible1.style.display == "flex") {
         containerVisible1.style.animation = "volverDivDeLaIzquierdaR 1s forwards";
         containerNoVisible1.style.animation = "desaparecerTextoR 1s forwards";
         botonFlechaDer.style.animation = "volverBotonDeLaIzquierdaR 1s forwards";
         setTimeout(()=>containerNoVisible1.style.display = "none", 1000);
      }
   }
})

botonFlechaIzq.addEventListener("click",()=>{
   if (anchoVentana >= 600) {
      if (containerNoVisible2.style.display == "none") {
         containerNoVisible2.style.display = "flex";
         containerNoVisible2.style.animation = "moverDivALaIzquierda 1s forwards";
         botonFlechaIzq.style.animation = "moverBotonALaIzquierda 1s forwards";
      } else if (containerNoVisible2.style.display == "flex") {
         containerNoVisible2.style.animation = "volverDivDeLaIzquierda 1s forwards";
         botonFlechaIzq.style.animation = "volverBotonDeLaIzquierda 1s forwards";
         setTimeout(()=>containerNoVisible2.style.display = "none", 1000);
      }
   } else if (anchoVentana < 600) {
      if (containerNoVisible2.style.display == "none") {
         containerNoVisible2.style.display = "flex";
         containerNoVisible2.style.animation = "aparecerTextoR 1s forwards";
         containerVisible2.style.animation = "moverDivALaDerechaR 1s forwards";
         botonFlechaIzq.style.animation = "moverBotonALaDerechaR 1s forwards";
      } else if (containerNoVisible2.style.display == "flex") {
         containerNoVisible2.style.animation = "desaparecerTextoR 1s forwards";
         containerVisible2.style.animation = "volverDivDeLaDerechaR 1s forwards";
         botonFlechaIzq.style.animation = "volverBotonDeLaDerechaR 1s forwards";
         setTimeout(()=>containerNoVisible2.style.display = "none", 1000);
      }
   }
})

