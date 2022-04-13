var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    }

});
// VanillaTilt.init(document.querySelector(".moveImg"), {
//     max: 25,
//     speed: 400
// });

AOS.init();



let mobilemenu = document.querySelector(".mobilemenu")
const Toggel = () => {


    let isShow = true


    if (isShow) {
        mobilemenu.style.right = "0%"
        
        isShow = false
    }
    else {
        mobilemenu.style.right = "-100%"

        
        isShow = true

    }



}
const ToggelOFF = () => {


    let isShow2 = true


    if (isShow2) {
        mobilemenu.style.right = "-100%"
        
        isShow2 = false
    }
    else {
        mobilemenu.style.right = "0%"

        
        isShow2 = true

    }



}



//about section

let mobabout = document.getElementById("mobabout").addEventListener("click" ,()=>{
    mobilemenu.style.right = "-100%"

})
let mobUtility = document.getElementById("mob Utility").addEventListener("click" ,()=>{
    mobilemenu.style.right = "-100%"

})
let mobRoadmap = document.getElementById("mobRoadmap").addEventListener("click" ,()=>{
    mobilemenu.style.right = "-100%"

})
let mobobjective = document.getElementById("mobobjective").addEventListener("click" ,()=>{
    mobilemenu.style.right = "-100%"

})
let mobFAQS = document.getElementById("mobFAQS").addEventListener("click" ,()=>{
    mobilemenu.style.right = "-100%"

})

