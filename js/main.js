const images = [
    "./images/jeep1.png",
    "./images/bmw5.png", "./images/jeep2.png",
    "./images/toyota-carrol.png", "./images/bmw2.webp"
];


const slideshow = document.getElementById("slideshow");
const curcils = document.querySelectorAll(".con > span")

let currentIndex = 0;
let time = 2000;

curcils.forEach((curcil) => {

    curcil.addEventListener("click", (e) => {
        curcils.forEach((cur) => {
            cur.style.background = "white"
        });
        e.target.style.background = "red"
        console.log(e.target, "ddddddddddddddddddddddd")

        const imageIndex = curcil.dataset.index;
        slideshow.src = images[imageIndex];
    })
});


const changeImages = () => {

    console.log(images[currentIndex], "currentIndex", currentIndex)

    slideshow.src = images[currentIndex]
    currentIndex++;


    if (currentIndex >= images.length) {
        currentIndex = 0;
    }


}

setInterval(() => changeImages(), time) //  ؟changeImages قبل  setInterval هل بفرق اني اكتب 