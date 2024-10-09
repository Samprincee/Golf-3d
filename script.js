var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(detail){
    crsr.style.left = detail.x + "px";
    crsr.style.top = detail.y + "px";

    blur.style.left = detail.x -200 + "px";
    blur.style.top = detail.y -200 + "px";
    
    
})

gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:2
    }

})

gsap.to("#main", {
    backgroundColor:"#000",
    duration:0.5,

    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start: "top -45%",
        end: "top -100%",
        scrub:1
    }

})

