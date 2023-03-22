let menu_bar=document.querySelector(".menu_bar");
let close_btn=document.querySelector(".close");
let menu=document.querySelector(".menu")
menu_bar.addEventListener("click",(e)=>{
menu.classList.add("d-visible")
menu.classList.remove("d-hidden")
})
close_btn.addEventListener("click",(e)=>{
menu.classList.add("d-hidden")
menu.classList.remove("d-visible")
})

let btn_shapping=document.querySelector(".list li button");
let cart=document.querySelector(".list li .cart");
let btn_checkout=document.querySelector(".list li .cart .car button")
btn_shapping.addEventListener("click",()=>{
cart.classList.toggle("visible_hidden");

})
btn_checkout.addEventListener("click",(btn)=>{
    cart.classList.add("visible_hidden");
cart.classList.remove("visible_visible");
})

let background_image=document.querySelector(".header .images .image img");
let images=document.querySelectorAll(".header .img img");

images.forEach((e)=>{
    e.addEventListener("click",(image)=>{
        images.forEach((i)=>{
            i.classList.remove("active")
        })
        e.classList.add("active");
        background_image.src=e.src
    })
})


let span_text=document.querySelector(".header .text .number");
function decrement(){
    let currentNumber=parseInt(span_text.innerHTML);
    if(currentNumber>0){
        span_text.innerHTML=currentNumber - 1;
    }
}
function increment(){
    let currentNumber=parseInt(span_text.innerHTML);
    if(currentNumber < 10){
        span_text.innerHTML=currentNumber + 1;
    }
}

let span_num=document.querySelector(".list li button .num");
let empty=document.querySelector(".list li .cart .car .empty");
let text_inempty=document.querySelector(".list li .cart .car .inempty");
let calc=document.querySelector(".list li .cart .car .inempty .text .calc");
let result=document.querySelector(".list li .cart .car .inempty .text .result");

function btn_add(){
    span_num.classList.add("vis_visibile");
    span_num.classList.remove("vis_hidden");
    span_num.innerHTML=span_text.innerHTML;
    if(span_num.innerHTML > 0){
        text_inempty.classList.add("dis_blocke");
        text_inempty.classList.remove("dis_non");
        empty.classList.remove("dis_block");
        empty.classList.add("dis_none");
    }else{
        text_inempty.classList.remove("dis_blocke");
        text_inempty.classList.add("dis_non");
        empty.classList.add("dis_block");
        empty.classList.remove("dis_none");
    }
    calc.innerHTML=`$125.00 x ${span_num.innerHTML}`
    result.innerHTML=`$${125.00 * span_num.innerHTML}`
}
function delet(){
    text_inempty.classList.remove("dis_blocke");
    text_inempty.classList.add("dis_non");
    empty.classList.add("dis_block");
    empty.classList.remove("dis_none");
}