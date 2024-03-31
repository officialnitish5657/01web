function scrollanimation() {
    gsap.to("#navbar", {
        backgroundColor: "black",
        color: "white",
        height: "21vh",
        scrollTrigger: {
            scroll: "body",
            triggre: "#navbar",
            // markers:true,
            start: "top-10%",
            // end:"top-13%",
            scrub: 3
        }
    })
    gsap.to("#page2", {
        backgroundColor: "black",
        scrollTrigger: {
            scroll: "body",
            triggre: "#page2",
            // markers:true,
            start: "top -30%",
            end: "top -100%",
            scrub: 3
        }
    })
}
scrollanimation();
function animation() {
    let play1 = document.querySelector("#play1");
    let main = document.querySelector("#main");
    main.addEventListener("mouseenter", function () {
        // alert("hello")
        gsap.to(play1, {
            opacity: 1,
            scale: 1,
        })
    })
    main.addEventListener("mouseleave", function () {
        // alert("hello")
        gsap.to(play1, {
            opacity: 0,
            scale: 0,

        })
    })
    main.addEventListener("mousemove", function (e) {
        gsap.to(play1, {
            left: e.x - 20,
            top: e.y - 3
        })
    })
    let play2 = document.querySelector("#play2");
    // let main2 = document.querySelector("#main");
    main.addEventListener("mouseenter", function () {
        // alert("hello")
        gsap.to(play2, {
            opacity: 1,
            scale: 1,

        })
    })
    main.addEventListener("mouseleave", function () {
        // alert("hello")
        gsap.to(play2, {
            opacity: 0,
            scale: 0,

        })
    })
    main.addEventListener("mousemove", function (e) {
        gsap.to(play2, {
            left: e.x - 14,
            top: e.y - 5
        })
    })

}
animation();

function para() {
    gsap.to("#para #first", {
        x: 100,
        scrollTrigger: {
            scroller: "body",
            trigger: "#first",
            left: "top-30%",
            scrub: true
        }
    })
}
para();
function para2() {
    gsap.to("#para #second", {
        x: -100,
        scrollTrigger: {
            scroller: "body",
            trigger: "#first",
            left: "top-30%",
            // end:"top-80%",
            scrub: true
        }
    })
}
para2();

function lineeffact() {
    gsap.to("#line", {
        y:-30,
        scrollTrigger: {
            scroller: "body",
            trigger: "#line",
            // top: "top-3%",
            // left:"top -10%",
            top:"top-20%",
            // markers:true,
            scrub: 1
        }
    })
}
lineeffact()

let paly = document.querySelector("#play");
let nav = document.querySelector("#title");
nav.addEventListener("mouseenter", function () {
    // alert("hello")
    gsap.to(paly, {
        opacity: 1,
        scale: 1,

    })
})
nav.addEventListener("mouseleave", function () {
    // alert("hello")
    gsap.to(paly, {
        opacity: 0,
        scale: 0,

    })
})
nav.addEventListener("mousemove", function (e) {
    gsap.to(play, {
        left: e.x - 14,
        top: e.y - 5
    })
})

