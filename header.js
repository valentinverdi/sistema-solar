const iconFlechaAbajoVisible1 = document.querySelector(".icon-flecha-abajo-visible-1");
const iconFlechaAbajoVisible2 = document.querySelector(".icon-flecha-abajo-visible-2");
const listaVisibleEscondida1 = document.querySelector(".header__navvisible-ul-li-ul-1");
const listaVisibleEscondida2 = document.querySelector(".header__navvisible-ul-li-ul-2");
const liPlanetasVisible = document.querySelector(".header__navvisible-ul-li-planetas");
const liMasVisible = document.querySelector(".header__navvisible-ul-li-mas");
const iconList = document.querySelector(".icon-list");
const iconFlechaIzq = document.querySelector(".icon-flecha-izquierda-navnovisible");
const navNoVisible = document.querySelector(".header__navnovisible");
const listaNoVisibleEscondida1 = document.querySelector(".header__navnovisible-ul-li-ul-1");
const listaNoVisibleEscondida2 = document.querySelector(".header__navnovisible-ul-li-ul-2");
const liPlanetasNoVisible = document.querySelector(".header__navnovisible-ul-li-planetas");
const liMasNoVisible = document.querySelector(".header__navnovisible-ul-li-mas");
const iconFlechaAbajoNoVisible1 = document.querySelector(".icon-flecha-abajo-novisible-1");
const iconFlechaAbajoNoVisible2 = document.querySelector(".icon-flecha-abajo-novisible-2");
const main = document.querySelector("main");


listaVisibleEscondida1.style.display = "none";
listaVisibleEscondida2.style.display = "none";
listaNoVisibleEscondida1.style.display = "none";
listaNoVisibleEscondida2.style.display = "none";

liPlanetasVisible.addEventListener("click",()=>{
    if (listaVisibleEscondida1.style.display == "none") {
        listaVisibleEscondida1.style.display = "block";
        listaVisibleEscondida1.style.animation = "aparecerUl1 0.7s forwards";
        iconFlechaAbajoVisible1.style.animation = "rotarIcono1 0.5s forwards";
    } else if (listaVisibleEscondida1.style.display == "block"){
       setTimeout(()=> listaVisibleEscondida1.style.display = "none", 500) 
        listaVisibleEscondida1.style.animation = "desaparecerUl1 0.4s forwards";
        iconFlechaAbajoVisible1.style.animation = "rotarIcono2 0.5s forwards";
    } 
})

liMasVisible.addEventListener("click",()=>{
    if (listaVisibleEscondida2.style.display == "none") {
        listaVisibleEscondida2.style.display = "block";
        listaVisibleEscondida2.style.animation = "aparecerUl2 0.4s forwards";
        iconFlechaAbajoVisible2.style.animation = "rotarIcono1 0.5s forwards";
    } else if (listaVisibleEscondida2.style.display == "block"){
        setTimeout(()=>listaVisibleEscondida2.style.display = "none",500);
        listaVisibleEscondida2.style.animation = "desaparecerUl2 0.4s forwards";
        iconFlechaAbajoVisible2.style.animation = "rotarIcono2 0.5s forwards";
    } 
})

navNoVisible.style.display = "none";

iconList.addEventListener("click",()=>{
    navNoVisible.style.display = "block";
    navNoVisible.style.animation = "abrirNav 0.8s forwards";
    iconList.style.animation = "cerrarNav 0.4s forwards";
})
iconFlechaIzq.addEventListener("click",()=>{
    navNoVisible.style.animation = "cerrarNav 0.8s forwards";
    setTimeout(()=>navNoVisible.style.display = "none", 800);
    iconList.style.animation = "abrirNav 0.4s forwards";
})

main.addEventListener("click",()=>{
    if (navNoVisible.style.display == "block") {
        navNoVisible.style.animation = "cerrarNav 0.8s forwards";
        setTimeout(()=>navNoVisible.style.display = "none", 800);
        iconList.style.animation = "abrirNav 0.4s forwards";
    }   
})

let xIni, yIni, xMv, yMv;

addEventListener("touchstart",(e)=>{
      xIni = e.targetTouches[0].pageX;
      yIni = e.targetTouches[0].pageY;
})

addEventListener("touchmove",(e)=>{
    if (e.targetTouches[0].pageX >= xIni+50) {
        xMv = "der";
    } else if (e.targetTouches[0].pageX <= xIni-50) {
        xMv = "izq";
    }            
})

addEventListener("touchend",(e)=>{
    if (xMv == "izq" & navNoVisible.style.display == "block") {
        navNoVisible.style.animation = "cerrarNav 0.8s forwards";
        setTimeout(()=>navNoVisible.style.display = "none", 800);
        iconList.style.animation = "abrirNav 0.4s forwards";
        xMv = null;
    } else if (xIni <= 35 & xMv === "der" & navNoVisible.style.display == "none") {
        navNoVisible.style.display = "block";
        navNoVisible.style.animation = "abrirNav 0.8s forwards";
        iconList.style.animation = "cerrarNav 0.4s forwards";
        xMv = null;
    }        
}) 

liPlanetasNoVisible.addEventListener("click",()=>{
    if (listaNoVisibleEscondida1.style.display == "none") {
        listaNoVisibleEscondida1.style.display = "block";
        listaNoVisibleEscondida1.style.animation = "aparecerUl1 0.5s forwards";
        iconFlechaAbajoNoVisible1.style.animation = "rotarIcono1 0.5s forwards";
    } else if (listaNoVisibleEscondida1.style.display == "block"){
       setTimeout(()=> listaNoVisibleEscondida1.style.display = "none", 200) 
        listaNoVisibleEscondida1.style.animation = "desaparecerUl1 0.25s forwards";
        iconFlechaAbajoNoVisible1.style.animation = "rotarIcono2 0.5s forwards";
    } 
})

liMasNoVisible.addEventListener("click",()=>{
    if (listaNoVisibleEscondida2.style.display == "none") {
        listaNoVisibleEscondida2.style.display = "block";
        listaNoVisibleEscondida2.style.animation = "aparecerUl2 0.5s forwards";
        iconFlechaAbajoNoVisible2.style.animation = "rotarIcono1 0.5s forwards";
    } else if (listaNoVisibleEscondida2.style.display == "block"){
        setTimeout(()=>listaNoVisibleEscondida2.style.display = "none",200);
        listaNoVisibleEscondida2.style.animation = "desaparecerUl2 0.25s forwards";
        iconFlechaAbajoNoVisible2.style.animation = "rotarIcono2 0.5s forwards";
    } 
})