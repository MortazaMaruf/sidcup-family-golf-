const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursorBlur");
const menu = document.querySelectorAll(".menu li ");
const logo = document.querySelector("nav #logo");
const cards = document.querySelectorAll(".card");
const sliderImg = document.querySelectorAll(".slide");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
    cursorBlur.style.left = dets.x - 150 + "px";
    cursorBlur.style.top = dets.y - 150 + "px";
    cursor.style.opacity = 1;
    cursorBlur.style.opacity = 1;
});
document.addEventListener("mouseleave", function () {
    cursor.style.opacity = 0;
    cursorBlur.style.opacity = 0;
});
// navigation
menu.forEach((menu) => {
    menu.addEventListener("mouseenter", cursorHover);
    menu.addEventListener("mouseleave", cursorMouseLeave)
})

//cards
cards.forEach((card) => {
    card.addEventListener("mouseenter", cursorHover);
    card.addEventListener("mouseleave", cursorMouseLeave);
})

// logo 
logo.addEventListener("mouseenter", cursorHover);
logo.addEventListener("mouseleave", cursorMouseLeave);
function cursorHover() {
    cursor.style.scale = 4;
    cursor.style.border = " 1px solid #fff";
    cursor.style.backgroundColor = "transparent";

}
function cursorMouseLeave() {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#98C223";
}


// image slides with swiper js


//gsap part
gsap.to("nav", {
    backgroundColor: "black",
    height: "70px",
    duration: .5,
    scrollTrigger: {
        Trigger: "nav",
        scroll: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});
gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
        Trigger: "main",
        scroll: "body",
        start: "top -35%",
        end: "top -80%",
        scrub: 2
    }
});


    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });

