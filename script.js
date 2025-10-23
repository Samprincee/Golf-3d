var crsr = document.querySelector("#cursor");
var dhun = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (detail) {
    crsr.style.left = detail.x + "px";
    crsr.style.top = detail.y + "px";

    dhun.style.left = detail.x - 200 + "px";
    dhun.style.top = detail.y - 200 + "px";


})

var h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", ()=>{
        crsr.style.scale=3
        crsr.style.border= " 1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", ()=>{
        crsr.style.scale=1
        crsr.style.border= " 0px solid #fff"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "120px",

    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,

    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -45%",
        end: "top -100%",
        scrub: 1
    }

})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,

    scrollTrigger:{
        trigger:'#about-us',
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:5
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,

    scrollTrigger:{
        trigger:'.card',
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,

    scrollTrigger:{
        trigger:'#page3',
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,

    scrollTrigger:{
        trigger:'#page3',
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
    //   markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });


//   Mobile js

if (window.innerWidth > 768) {
  var crsr = document.querySelector("#cursor");
  var dhun = document.querySelector("#cursor-blur");

  document.addEventListener("mousemove", function (detail) {
      crsr.style.left = detail.x + "px";
      crsr.style.top = detail.y + "px";
      dhun.style.left = detail.x - 200 + "px";
      dhun.style.top = detail.y - 200 + "px";
  });

  var h4all = document.querySelectorAll("#nav h4");

  h4all.forEach(function (elem) {
      elem.addEventListener("mouseenter", ()=>{
          crsr.style.scale = 3;
          crsr.style.border = "1px solid #fff";
          crsr.style.backgroundColor = "transparent";
      });
      elem.addEventListener("mouseleave", ()=>{
          crsr.style.scale = 1;
          crsr.style.border = "0px solid #fff";
          crsr.style.backgroundColor = "#95C11E";
      });
  });
}
