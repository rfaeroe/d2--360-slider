const sliderBirdsElem = document.getElementById("sliderbirds");
const birdElem = document.getElementById("bird");

const sliderElem = document.getElementById("slider");
const chairElem = document.getElementById("chair");


const birdImages = [
    "./photos/birds/img1.webp",
    "./photos/birds/img3.webp",
    "./photos/birds/img5.webp",
    "./photos/birds/img7.webp",
    "./photos/birds/img9.webp",
    "./photos/birds/img11.webp",
    "./photos/birds/img13.webp",
    "./photos/birds/img15.webp",
    "./photos/birds/img17.webp",
    "./photos/birds/img19.webp",
]

sliderBirdsElem.addEventListener("input", function (event) {
    // console.log(event.currentTarget.value);

    const index = event.currentTarget.value;

    console.log(birdImages[index])
    const newSrc = birdImages[index];

    // chairElem.src = newSrc
    birdElem.setAttribute("src", newSrc);
});






const images = [
    "./photos/chair/1.jpg",
    "./photos/chair/2.jpg",
    "./photos/chair/3.jpg",
    "./photos/chair/4.jpg",
    "./photos/chair/5.jpg",
    "./photos/chair/6.jpg",
]

sliderElem.addEventListener("input", function (event) {
    // console.log(event.currentTarget.value);

    const index = event.currentTarget.value;

    console.log(images[index])
    const newSrc = images[index];

    // chairElem.src = newSrc
    chairElem.setAttribute("src", newSrc);
});



