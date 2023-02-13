const btnTarjetaVisible1 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-1");
const btnTarjetaVisible2 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-2");
const btnTarjetaVisible3 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-3");
const btnTarjetaVisible4 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-4");
const btnTarjetaVisible5 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-5");
const btnTarjetaVisible6 =document.querySelector(".section2__grid-container-tarjetasvisibles-btn-6");
const btnTarjetaNoVisible1 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-1");
const btnTarjetaNoVisible2 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-2");
const btnTarjetaNoVisible3 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-3");
const btnTarjetaNoVisible4 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-4");
const btnTarjetaNoVisible5 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-5");
const btnTarjetaNoVisible6 =document.querySelector(".section2__grid-container-tarjetasnovisibles-btn-6");
const tarjetaVisible1 = document.querySelector(".section2__grid-container-tarjetasvisibles-1");
const tarjetaVisible2 = document.querySelector(".section2__grid-container-tarjetasvisibles-2");
const tarjetaVisible3 = document.querySelector(".section2__grid-container-tarjetasvisibles-3");
const tarjetaVisible4 = document.querySelector(".section2__grid-container-tarjetasvisibles-4");
const tarjetaVisible5 = document.querySelector(".section2__grid-container-tarjetasvisibles-5");
const tarjetaVisible6 = document.querySelector(".section2__grid-container-tarjetasvisibles-6");
const tarjetaNoVisible1 = document.querySelector(".section2__grid-container-tarjetasnovisibles-1");
const tarjetaNoVisible2 = document.querySelector(".section2__grid-container-tarjetasnovisibles-2");
const tarjetaNoVisible3 = document.querySelector(".section2__grid-container-tarjetasnovisibles-3");
const tarjetaNoVisible4 = document.querySelector(".section2__grid-container-tarjetasnovisibles-4");
const tarjetaNoVisible5 = document.querySelector(".section2__grid-container-tarjetasnovisibles-5");
const tarjetaNoVisible6 = document.querySelector(".section2__grid-container-tarjetasnovisibles-6");

btnTarjetaVisible1.addEventListener("click",()=>{
    tarjetaVisible1.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible1.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible1.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible1.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible1.addEventListener("click",()=>{
    tarjetaNoVisible1.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible1.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible1.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible1.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

btnTarjetaVisible2.addEventListener("click",()=>{
    tarjetaVisible2.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible2.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible2.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible2.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible2.addEventListener("click",()=>{
    tarjetaNoVisible2.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible2.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible2.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible2.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

btnTarjetaVisible3.addEventListener("click",()=>{
    tarjetaVisible3.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible3.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible3.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible3.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible3.addEventListener("click",()=>{
    tarjetaNoVisible3.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible3.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible3.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible3.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

btnTarjetaVisible4.addEventListener("click",()=>{
    tarjetaVisible4.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible4.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible4.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible4.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible4.addEventListener("click",()=>{
    tarjetaNoVisible4.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible4.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible4.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible4.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

btnTarjetaVisible5.addEventListener("click",()=>{
    tarjetaVisible5.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible5.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible5.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible5.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible5.addEventListener("click",()=>{
    tarjetaNoVisible5.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible5.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible5.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible5.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

btnTarjetaVisible6.addEventListener("click",()=>{
    tarjetaVisible6.style.animation = "rotar0a90 .5s linear forwards"
    setTimeout(()=>(tarjetaVisible6.style.display = "none"), 505)
    setTimeout(()=>(tarjetaNoVisible6.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaNoVisible6.style.animation = "rotar90a180 .5s linear forwards"), 515)
});

btnTarjetaNoVisible6.addEventListener("click",()=>{
    tarjetaNoVisible6.style.animation = "rotar180a90 .5s linear forwards"
    setTimeout(()=>(tarjetaNoVisible6.style.display = "none"), 505)
    setTimeout(()=>(tarjetaVisible6.style.display = "flex"), 510)
    setTimeout(()=>(tarjetaVisible6.style.animation = "rotar90a0 .5s linear forwards"), 515)
});

