const rightBtn = document.querySelector("#boton-derecho");
const leftBtn = document.querySelector("#boton-izquierdo");

const content = document.querySelector("#container-cards");


rightBtn.addEventListener("click",()=>{
    content.scrollLeft += 200;
})

leftBtn.addEventListener("click",()=>{
    content.scrollLeft -= 200;})