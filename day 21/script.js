gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top - 10%",
        end: "end - 11%",
        scrub: 3,
        markers: true
        
    }
})

// gsap.to("#main",{
//     backgroundColor: "#000",
//     scrollTigger:{
//         trigger: "#main",
//         scroller: "body",
//         start: "30vh",
//         end: "top-80vh",
//         scrub: 3
//     }
// })