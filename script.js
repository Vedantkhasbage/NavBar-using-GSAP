const tl=gsap.timeline();
const crossicon=document.querySelector(".ri-close-line");
const menuIcon=document.querySelector(".ri-menu-line");




tl.to(".full",{
    right:0,
    duration:0.5
})

tl.from(".full h4",{
    opacity:0,
    duration:0.45,
    x:150,
    stagger:0.28
})

tl.from(".full i",{
    opacity:0
})

tl.pause();
crossicon.addEventListener("click",()=>{
    tl.reverse();
})
menuIcon.addEventListener("click",()=>{
    tl.play();
})