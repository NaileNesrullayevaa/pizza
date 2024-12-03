"use strict"
const ketchup=document.querySelector('.ketchup')
const mustard=document.querySelector('.mustard')
const pizza=document.querySelector('.pizza-img')
const pizzaImg=document.querySelector('.pizza-img img')
const icon=document.querySelector(".left-box .box i")
const box=document.querySelector(".left-box .box")
const vegetables=document.querySelector(".right-box .spices")
const small=document.querySelector('.right-box .second #input1')
const middle=document.querySelector('.right-box .second #input2')
const big=document.querySelector('.right-box .second #input3')

icon.addEventListener("click",function(){
    box.classList.add('active2')
})


// for (let i = 0; i < icon.length; i++) {
//     icon[i].addEventListener('click', function() {
//         // Loop through all 'box' elements and add 'active2' class
//         for (let j = 0; j < box.length; j++) {
//             box[j].classList.add('active2');
//         }
//     });
// }

small.addEventListener('click',function(){
    pizzaImg.classList.add('active-s')
})
middle.addEventListener('click',function(){
    pizzaImg.classList.add('active-m')
})
big.addEventListener('click',function(){
    pizzaImg.classList.add('active-b')
})
ketchup.addEventListener('dragstart',function(a){
    a.dataTransfer.setData("naile",this.id)
})
ketchup.addEventListener("click",function(){
    pizza.style.background="red";
})
mustard.addEventListener("click",function(){
    pizza.style.background="yellow";
})
for(let i=0;i<vegetables.length;i++){
    vegetables[i].addEventListener("dragstart",function(a){
        a.dataTransfer.setData("vegetable",this.id)
    })
}
pizza.addEventListener("dragover",function(b){
    b.preventDefault();
})



pizza.addEventListener("drop", function (e) {
    e.preventDefault();
    const vegetableSrc = e.dataTransfer.getData("text/plain");
    const rect = pizza.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const vegetable = document.createElement("img");
    vegetable.src = vegetableSrc;
    vegetable.style.position = "absolute";
    vegetable.style.left = `${offsetX - 25}px`; 
    vegetable.style.top = `${offsetY - 25}px`; 
    vegetable.style.width = "50px";
    vegetable.style.height = "50px";
    vegetable.draggable = false; 
    pizza.appendChild(vegetable);
  });























