// ---------------SECTION2------------------
const sec2ContainerNoVisible = document.querySelector(".section2__containernovisible");
const sec2Btn = document.querySelector(".section2__containervisible-btn");
const sec2HeightDiv = window.getComputedStyle(sec2ContainerNoVisible).height;

sec2ContainerNoVisible.style.height = "0px";
sec2ContainerNoVisible.style.transition = "height 1s";
sec2ContainerNoVisible.style.border = "none";

sec2Btn.addEventListener("click", ()=>{   
    if (sec2ContainerNoVisible.style.height == "0px") {
        sec2ContainerNoVisible.style.height = `${sec2HeightDiv}`;
        sec2ContainerNoVisible.style.border = "1px solid #fff";
        sec2Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec2ContainerNoVisible.style.height == `${sec2HeightDiv}`) {
        sec2ContainerNoVisible.style.height = "0px";
        sec2ContainerNoVisible.style.border = "none";
        sec2Btn.style.animation = "desrotarBtn 1s forwards";
    }
})

// ---------------SECTION3------------------
const sec3ContainerNoVisible = document.querySelector(".section3__containernovisible");
const sec3Btn = document.querySelector(".section3__containervisible-btn");
const sec3HeightDiv = window.getComputedStyle(sec3ContainerNoVisible).height;

sec3ContainerNoVisible.style.height = "0px";
sec3ContainerNoVisible.style.transition = "height 1s";
sec3ContainerNoVisible.style.border = "none";

sec3Btn.addEventListener("click", ()=>{
    if (sec3ContainerNoVisible.style.height == "0px") {
        sec3ContainerNoVisible.style.height = `${sec3HeightDiv}`;
        sec3ContainerNoVisible.style.border = "1px solid #fff";
        sec3Btn.style.animation = "rotarBtn 1s forwards";
    } else if (sec3ContainerNoVisible.style.height == `${sec3HeightDiv}`) {
        sec3ContainerNoVisible.style.height = "0px";
        sec3ContainerNoVisible.style.border = "none";
        sec3Btn.style.animation = "desrotarBtn 1s forwards";
    } 
})

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
